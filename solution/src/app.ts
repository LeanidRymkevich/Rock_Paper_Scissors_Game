import Controller from './controller/controller';
import { CMD_NAMES } from './types/enums';
import { IController } from './types/interfaces';

class App {
  private readonly controller: IController;

  // TODO consider the possibility of initializing all big instances here and then to pass them into each other if necessary

  public constructor() {
    this.controller = new Controller(process.argv.slice(2));
  }

  public launch(): void {
    this.controller.execute(CMD_NAMES.GREETINGS);
    this.controller.execute(CMD_NAMES.ENTER_YOUR_MOVE); //TODO may be move from here later

    process.stdin.on('data', (data: string): void => {
      this.controller.execute(data.toString().trim(), true);
      this.controller.execute(CMD_NAMES.ENTER_YOUR_MOVE); //TODO may be move from here later
    });

    process.on('SIGINT', () => {
      this.controller.execute(CMD_NAMES.EXIT);
    });
  }
}

new App().launch();
