interface IUI {
  showEnterCommandMsg(): void;
  showWelcomeMsg(): void;
  showFarewellMsg(): void;
  showHelpMsg(_command: string, moves: string[]): void;
}

interface IController {
  execute(command: string, isExternal?: boolean): void;
}

export { IUI, IController };
