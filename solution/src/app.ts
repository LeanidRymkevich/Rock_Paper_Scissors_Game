import Controller from './controller/controller';
import { CMD_NAMES } from './types/enums';
import { IController } from './types/interfaces';

import Game from './game/game';
import UI from './UI/ui';

class App {
  private readonly controller: IController;

  // TODO add validation here?
  public constructor() {
    const moves: string[] = process.argv.slice(2);
    const game = new Game(moves);
    const ui = new UI(moves, game);
    this.controller = new Controller(moves, ui);
  }

  public launch(): void {
    this.controller.execute(CMD_NAMES.WELCOME);
    this.controller.execute(CMD_NAMES.START_GAME);

    process.stdin.on('data', (data: string): void => {
      this.controller.execute(data.toString().trim(), true);
    });

    process.on('SIGINT', () => {
      this.controller.execute(CMD_NAMES.EXIT);
    });
  }
}

new App().launch();
