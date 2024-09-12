import { NoCommandError, CustomError, ValidationError } from '../errors/errors';
import { CMD_NAMES, SPECIAL_MOVES } from '../types/enums';
import { IController, IUI, IValidator } from '../types/interfaces';
import {
  Executable,
  IExternalCommandsMap,
  IInternalCommandsMap,
} from '../types/types';
import UI from '../ui/ui';
import Validator from '../validator/validator';

export default class Controller implements IController {
  private readonly externalCommands: IExternalCommandsMap;
  private readonly internalCommands: IInternalCommandsMap;
  private readonly moves: string[];
  private readonly ui: IUI;

  public constructor(moves: string[]) {
    this.moves = moves;
    this.ui = new UI();
    this.validateMoves(moves);
    this.externalCommands = this.assignExternalCommands(moves);
    this.internalCommands = this.assignInternalCommands();
  }

  public execute(command: string, isExternal: boolean = false): void {
    try {
      if (!isExternal) {
        this.internalCommands[command as CMD_NAMES](
          command,
          this.moves,
          this.ui
        );
        return;
      }

      const handler: Executable = this.externalCommands[command];

      if (!handler) throw new NoCommandError(command);
      handler(command, this.moves, this.ui);
    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message);
        // TODO do something else
      } else {
        throw error;
      }
    }
  }

  public validateMoves(moves: string[]): void {
    const validator: IValidator = new Validator(moves);

    try {
      validator.validate();
    } catch (error) {
      if (error instanceof ValidationError) {
        this.ui.showValidationError(error);
      } else {
        throw error;
      }
    }
  }

  private assignExternalCommands(moves: string[]): IExternalCommandsMap {
    const result: IExternalCommandsMap = {};

    moves.forEach((move: string, idx: number): void => {
      result[idx + 1] = (): void => console.log(move); // TODO add normal handler
    });
    result[SPECIAL_MOVES.EXIT] = this.ui.showFarewellMsg;
    result[SPECIAL_MOVES.HELP] = this.ui.showHelpMsg;

    return result;
  }

  private assignInternalCommands(): IInternalCommandsMap {
    const result: IInternalCommandsMap = {};

    result[CMD_NAMES.EXIT] = this.ui.showFarewellMsg;
    result[CMD_NAMES.GREETINGS] = this.ui.showWelcomeMsg;
    result[CMD_NAMES.ENTER_YOUR_MOVE] = this.ui.showEnterCommandMsg;

    return result;
  }
}
