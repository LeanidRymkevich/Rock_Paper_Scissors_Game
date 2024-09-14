import { NoCommandError, CustomError, ValidationError } from '../errors/errors';
import Validator from '../validator/validator';

import { CMD_NAMES, SPECIAL_MOVES } from '../types/enums';
import { IController, IUI, IValidator } from '../types/interfaces';
import {
  Executable,
  ExternalCommandsMap,
  InternalCommandsMap,
} from '../types/types';

export default class Controller implements IController {
  private readonly externalCommands: ExternalCommandsMap;
  private readonly internalCommands: InternalCommandsMap;
  private readonly moves: string[];
  private readonly ui: IUI;

  public constructor(moves: string[], ui: IUI) {
    this.moves = moves;
    this.ui = ui;
    this.validateMoves(moves);
    this.externalCommands = this.assignExternalCommands();
    this.internalCommands = this.assignInternalCommands();
  }

  public execute(command: string, isExternal: boolean = false): void {
    try {
      if (!isExternal) {
        this.internalCommands[command as CMD_NAMES](command);
        return;
      }

      const handler: Executable = this.externalCommands[command];

      if (!handler) throw new NoCommandError(command);
      handler(command);
    } catch (error) {
      if (error instanceof CustomError) {
        this.ui.showWrongMoveError(error);
      } else {
        throw error;
      }
    }
  }

  private validateMoves(moves: string[]): void {
    const validator: IValidator = new Validator(moves);

    try {
      validator.validate();
    } catch (error) {
      if (error instanceof ValidationError) {
        this.ui.finishWithError(error);
      } else {
        throw error;
      }
    }
  }

  private assignExternalCommands(): ExternalCommandsMap {
    const result: ExternalCommandsMap = {};

    this.moves.forEach((_move: string, idx: number): void => {
      result[idx + 1] = this.ui.finishGame.bind(this.ui);
    });
    result[SPECIAL_MOVES.EXIT] = this.ui.sayGoodbye.bind(this.ui);
    result[SPECIAL_MOVES.HELP] = this.ui.help.bind(this.ui);

    return result;
  }

  private assignInternalCommands(): InternalCommandsMap {
    const result: InternalCommandsMap = {};

    result[CMD_NAMES.EXIT] = this.ui.sayGoodbye.bind(this.ui);
    result[CMD_NAMES.WELCOME] = this.ui.welcome.bind(this.ui);
    result[CMD_NAMES.START_GAME] = this.ui.startGame.bind(this.ui);

    return result;
  }
}
