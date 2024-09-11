import { CMD_NAMES } from './enums';
import { IUI } from './interfaces';

type Executable = (command: string, moves: string[], ui: IUI) => void;

type IExternalCommandsMap = {
  [key: string]: Executable;
};

type IInternalCommandsMap = {
  [value in CMD_NAMES]?: Executable;
};

export { Executable, IExternalCommandsMap, IInternalCommandsMap };
