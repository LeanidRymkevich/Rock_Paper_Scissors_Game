// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

import { bold, cyan, ForegroundColor, green, italic, red, yellow } from 'chalk';

import { ValidationError } from '../errors/errors';
import TableCreator from './tables/tableCreator';

import { GAME_RESULT, MSG_TEXTS } from '../types/enums';
import { IGame, ITableCreator, IUI } from '../types/interfaces';

export default class UI implements IUI {
  private readonly moves: string[];
  private readonly tableCreator: ITableCreator;
  private readonly game: IGame;

  public constructor(moves: string[], game: IGame) {
    this.moves = moves;
    this.game = game;
    this.tableCreator = new TableCreator(moves, game);
  }

  public startGame(): void {
    this.printWithEmptyLineBelow(
      bold.blue(MSG_TEXTS.HMAC) + cyan.underline(this.game.getHMAC())
    );
    this.proposeActions();
  }

  public finishGame(move: string): void {
    const userMoveIdx: number = +move - 1;
    console.log();
    console.log(bold.blue(MSG_TEXTS.YOUR_MOVE) + this.moves[userMoveIdx]);
    console.log(bold.blue(MSG_TEXTS.PC_MOVE) + this.game.getPCMove());
    this.showGameResult(userMoveIdx);
    this.printWithEmptyLineBelow(
      bold.blue(MSG_TEXTS.HMAC_KEY) + cyan.underline(this.game.getHMACKey())
    );
    this.printWithEmptyLineBelow(italic.magenta(MSG_TEXTS.TRY_AGAIN_OR_LEAVE));
    this.startGameAgain();
  }

  public proposeActions(): void {
    this.tableCreator.getCommandsTable().printTable();
    process.stdout.write(
      `${yellow(MSG_TEXTS.ENTER_CMD)} ${bold.italic.blue.underline(MSG_TEXTS.INDEX)} > `
    );
  }

  public welcome(): void {
    this.printWithEmptyLineBelow(green.bold(MSG_TEXTS.WELCOME));
  }

  public sayGoodbye(): void {
    console.log();
    console.log(green.bold(MSG_TEXTS.FAREWELL));
    process.exit(0);
  }

  public help(): void {
    console.log();
    this.tableCreator.getHelpTable().printTable();
    console.log();
    this.proposeActions();
  }

  public finishWithError(error: ValidationError): void {
    console.log(red(error.message));
    console.log(red.bold.italic.underline(MSG_TEXTS.WRONG_MOVES_ARGS));
    process.exit(0);
  }

  private startGameAgain(): void {
    this.game.startNewGame();
    this.startGame();
  }

  private printWithEmptyLineBelow(string: string): void {
    console.log(`${string}\n`);
  }

  private showGameResult(moveIdx: number): void {
    const result: GAME_RESULT = this.game.getGameResult(moveIdx);
    const resultColor: typeof ForegroundColor =
      result === GAME_RESULT.DRAW
        ? 'yellow'
        : result === GAME_RESULT.LOSE
          ? 'red'
          : 'green';
    console.log(
      bold.blue(MSG_TEXTS.GAME_RESULTS) + chalk[resultColor](result) + '!'
    );
  }
}
