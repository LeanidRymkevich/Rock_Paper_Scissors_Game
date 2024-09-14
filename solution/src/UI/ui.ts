import { green, red } from 'chalk';

import { ValidationError } from '../errors/errors';
import { MSG_TEXTS } from '../types/enums';
import { IGame, ITableCreator, IUI } from '../types/interfaces';
import TableCreator from './tables/tableCreator';

export default class UI implements IUI {
  private readonly moves: string[];
  private readonly tableCreator: ITableCreator;
  private readonly game: IGame;

  public constructor(moves: string[], game: IGame) {
    this.moves = moves;
    this.game = game;
    this.tableCreator = new TableCreator(moves, game);
  }

  public showEnterCommandMsg(): void {
    this.tableCreator.getCommandsTable().printTable();
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
