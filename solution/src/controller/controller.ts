import { NoCommandError, CustomError } from '../errors/errors';
import { ICommandInfo, IController, IUI } from '../types/interfaces';
import UI from '../ui/ui';

export default class Controller implements IController {
  private readonly commandsMap: Record<string, ICommandInfo> = {};
  private readonly moves: string[];
  private readonly ui: IUI;

  public constructor(moves: string[]) {
    this.moves = moves;
    this.ui = new UI();
  }

  execute(command: string): void {
    try {
      const record: ICommandInfo = this.commandsMap[command];

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

  private addMovesToCommandsMap(moves: string[]): void {
    moves.forEach((move: string, idx: number): void => {
      this.commandsMap[idx + 1] = {
        name: move,
        handler: (): void => console.log(move), // TODO add normal handler
      };
    });
  }
}
