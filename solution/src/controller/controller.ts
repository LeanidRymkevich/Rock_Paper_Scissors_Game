import { NoCommandError, CustomError, ValidationError } from '../errors/errors';
import Validator from '../validator/validator';

import { COMMANDS } from '../types/enums';
import { IController, IUI } from '../types/interfaces';
import { CommandsMap } from '../types/types';

export default class Controller implements IController {
  private readonly commandsMap: CommandsMap;
  private readonly movesNum: number;
  private readonly ui: IUI;

  public constructor(moves: string[], ui: IUI) {
    this.movesNum = moves.length;
    this.ui = ui;
    this.validateMoves(moves);
    this.commandsMap = this.assignCommands();
  }

  public execute(command: string): void {
    try {
      const commandAsNum = +command;
      if (commandAsNum > 0 && commandAsNum <= this.movesNum) {
        this.commandsMap[COMMANDS.FINISH_GAME](command);
        return;
      }

      if (!(command in this.commandsMap)) throw new NoCommandError(command);
      this.commandsMap[command](command);
    } catch (error) {
      if (!(error instanceof CustomError)) throw error;
      this.ui.showWrongMoveError(error);
    }
  }

  private validateMoves(moves: string[]): void {
    try {
      new Validator(moves).validate();
    } catch (error) {
      if (!(error instanceof ValidationError)) throw error;
      this.ui.finishWithError(error);
    }
  }

  private assignCommands(): CommandsMap {
    return {
      [COMMANDS.EXIT]: this.ui.sayGoodbye.bind(this.ui),
      [COMMANDS.WELCOME]: this.ui.welcome.bind(this.ui),
      [COMMANDS.FINISH_GAME]: this.ui.finishGame.bind(this.ui),
      [COMMANDS.START_GAME]: this.ui.startGame.bind(this.ui),
      [COMMANDS.HELP]: this.ui.help.bind(this.ui),
    };
  }
}
