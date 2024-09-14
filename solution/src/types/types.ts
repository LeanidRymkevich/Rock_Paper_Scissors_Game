import { COMMANDS } from './enums';

type Executable = (command: string) => void;

type CommandsMap = {
  [value in COMMANDS]: Executable;
};

type Alignment = 'center' | 'left' | 'right';

export { Executable, CommandsMap, Alignment };
