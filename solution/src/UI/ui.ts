import { green, red, bgRed } from '@larchanka/colors-js';
import { Table } from 'console-table-printer';

import { ValidationError } from '../errors/errors';
import { CMD_NAMES, MSG_TEXTS, SPECIAL_MOVES } from '../types/enums';
import { IUI } from '../types/interfaces';

export default class UI implements IUI {
  public constructor() {}

  public showEnterCommandMsg(_command: string, moves: string[]): void {
    const table: Table = new Table({
      title: MSG_TEXTS.AVAILABLE_MOVES,
      columns: [
        { name: 'Index', alignment: 'center', color: 'cyan' },
        { name: 'Move_name', alignment: 'center', color: 'magenta' },
      ],
    });

    moves.forEach((move: string, index: number): void => {
      table.addRow({ Index: `${index + 1}`, Move_name: move });
    });
    table.addRow({ Index: SPECIAL_MOVES.EXIT, Move_name: CMD_NAMES.EXIT });
    table.addRow({ Index: SPECIAL_MOVES.HELP, Move_name: CMD_NAMES.HELP });

    table.printTable();
    process.stdout.write(MSG_TEXTS.ENTER_CMD);
  }

  public showWelcomeMsg(): void {
    console.log(green(MSG_TEXTS.WELCOME));
  }

  public showFarewellMsg(): void {
    console.log();
    console.log(green(MSG_TEXTS.FAREWELL));
    process.exit(0);
  }

  public showHelpMsg(_command: string, moves: string[]): void {
    console.log(moves);
  }

  public showValidationError(error: ValidationError): void {
    console.log(red(error.message));
    console.log(bgRed(MSG_TEXTS.WRONG_MOVES_ARGS));
    process.exit(0);
  }
}
