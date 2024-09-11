import { NoCommandError, CustomError } from '../errors/errors';
import {
  ICommandInfo,
  IController,
  IInternalCommandsMap,
  IUI,
} from '../types/interfaces';
import UI from '../ui/ui';

export default class Controller implements IController {
  private readonly externalCommands: Record<string, ICommandInfo> = {};
  private readonly internalCommands: IInternalCommandsMap;
  private readonly moves: string[];
  private readonly ui: IUI;

  public constructor(moves: string[]) {
    this.moves = moves;
    this.ui = new UI();
    this.addMovesToExternalCommands(moves); // TODO add commands for 0 and ? indexes
  }

  execute(command: string, isExternal: boolean = false): void {
    try {
      if (!isExternal) {
        this.internalCommands[command](this.moves);
        return;
      }

      const record: ICommandInfo = this.externalCommands[command];

      if (!record) throw new NoCommandError(command);

      record.handler(this.moves);
    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error.message);
        // TODO do something else
      } else {
        throw error;
      }
    }
  }

  private addMovesToExternalCommands(moves: string[]): void {
    moves.forEach((move: string, idx: number): void => {
      this.externalCommands[idx + 1] = {
        name: move,
        handler: (): void => console.log(move), // TODO add normal handler
      };
    });
  }
}
