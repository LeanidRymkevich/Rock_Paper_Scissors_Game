import { CMD_NAMES } from './enums';

type Executable = (command: string) => void;

type ExternalCommandsMap = {
  [key: string]: Executable;
};

type InternalCommandsMap = {
  [value in CMD_NAMES]?: Executable;
};

type Alignment = 'center' | 'left' | 'right';

export { Executable, ExternalCommandsMap, InternalCommandsMap, Alignment };
