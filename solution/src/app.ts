import { IUI } from './types/interfaces';
import UI from './UI/ui';

class App {
  private readonly MOVES: string[];
  private readonly UI: IUI;

  public constructor() {
    this.MOVES = process.argv.slice(2);
    this.UI = new UI();
  }

  public launch(): void {
    console.log(this.MOVES);
    this.UI.showWelcomeMsg();
    this.UI.showEnterCommandMsg();

    process.stdin.on('data', async (data) => {
      console.log(`Your string is ${data}`);
      this.UI.showEnterCommandMsg();
    });

    process.on('SIGINT', () => {
      this.UI.showFarewellMsg();
      process.exit(0);
    });
  }
}

new App().launch();
