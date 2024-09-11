import Controller from './controller/controller';
import { CMD_NAMES } from './types/enums';
import { IController } from './types/interfaces';

class App {
  private readonly controller: IController;

  public constructor() {
    this.controller = new Controller(process.argv.slice(2));
  }

  public launch(): void {
    this.controller.execute(CMD_NAMES.GREETINGS);

    process.stdin.on('data', (data: string): void => {
      this.controller.execute(data, true);
    });

    process.on('SIGINT', () => {
      this.controller.execute(CMD_NAMES.EXIT);
    });
  }
}

new App().launch();
