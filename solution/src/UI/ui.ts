import { green, red } from 'chalk';

import { ValidationError } from '../errors/errors';
import { MSG_TEXTS } from '../types/enums';
import { IUI } from '../types/interfaces';
import MovesTable from './tables';
import { Table } from 'console-table-printer';

export default class UI implements IUI {
  public constructor() {}

  public showEnterCommandMsg(_command: string, moves: string[]): void {
    const table: Table = new MovesTable(moves).getCommandsTable();

    table.printTable();
    process.stdout.write(MSG_TEXTS.ENTER_CMD);
  }

  public showWelcomeMsg(): void {
    console.log(green.bold(MSG_TEXTS.WELCOME));
  }

  public showFarewellMsg(): void {
    console.log();
    console.log(green.bold(MSG_TEXTS.FAREWELL));
    process.exit(0);
  }

  public showHelpMsg(_command: string, moves: string[]): void {
    console.log(moves);
  }

  public showValidationError(error: ValidationError): void {
    console.log(red(error.message));
    console.log(red.bold.italic.underline(MSG_TEXTS.WRONG_MOVES_ARGS));
    process.exit(0);
  }
}
