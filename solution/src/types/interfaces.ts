import { CMD_NAMES } from './enums';

interface IUI {
  showEnterCommandMsg(): void;
  showWelcomeMsg(): void;
  showFarewellMsg(): void;
}

interface ICommandInfo {
  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handler: Function; // TODO change later on normal type
}

interface IController {
  execute(command: string, isExternal?: boolean): void;
}

type IInternalCommandsMap = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [value in CMD_NAMES]: Function; // TODO change later on normal type
};

export { IUI, ICommandInfo, IController, IInternalCommandsMap };
