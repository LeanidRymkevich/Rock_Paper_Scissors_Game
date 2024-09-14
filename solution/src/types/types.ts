import { CMD_NAMES } from './enums';
import { IUI } from './interfaces';

type Executable = (command: string, moves: string[], ui: IUI) => void;

type ExternalCommandsMap = {
  [key: string]: Executable;
};

type InternalCommandsMap = {
  [value in CMD_NAMES]?: Executable;
};

type GameResultSign = -1 | 0 | 1;

export { Executable, ExternalCommandsMap, InternalCommandsMap, GameResultSign };
