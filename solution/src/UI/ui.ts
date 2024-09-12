// eslint-disable-next-line @typescript-eslint/no-var-requires
// const colors = require('@larchanka/colors-js');

import { green, red, bgRed } from '@larchanka/colors-js';

import { ValidationError } from '../errors/errors';
import { MSG_TEXTS } from '../types/enums';
import { IUI } from '../types/interfaces';

export default class UI implements IUI {
  public constructor() {}

  public showEnterCommandMsg(): void {
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
