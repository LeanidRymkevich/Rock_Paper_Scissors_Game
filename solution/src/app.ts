import Controller from './controller/controller';
import { COMMANDS } from './types/enums';
import { IController } from './types/interfaces';

import Game from './game/game';
import UI from './UI/ui';

class App {
  private readonly controller: IController;

  public constructor() {
    const moves: string[] = process.argv.slice(2);
    const game = new Game(moves);
    const ui = new UI(moves, game);
    this.controller = new Controller(moves, ui);
  }

  public launch(): void {
    this.controller.execute(COMMANDS.WELCOME);
    this.controller.execute(COMMANDS.START_GAME);

    process.stdin.on('data', (data: string): void => {
      this.controller.execute(data.toString().trim());
    });

    process.on('SIGINT', () => {
      this.controller.execute(COMMANDS.EXIT);
    });
  }
}

new App().launch();
