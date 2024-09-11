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
  execute(command: string): void;
}

export { IUI, ICommandInfo, IController };
