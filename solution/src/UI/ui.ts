import { MSG_TEXTS } from '../types/enums';
import { IUI } from '../types/interfaces';

export default class UI implements IUI {
  public constructor() {}

  public showEnterCommandMsg(): void {
    process.stdout.write(MSG_TEXTS.ENTER_CMD);
  }

  public showWelcomeMsg(): void {
    console.log(MSG_TEXTS.WELCOME);
  }

  public showFarewellMsg(): void {
    console.log(MSG_TEXTS.FAREWELL);
  }
}
