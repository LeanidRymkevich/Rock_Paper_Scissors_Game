import { Table } from 'console-table-printer';
import { ForegroundColor } from 'chalk';
import {
  ColumnOptionsRaw,
  ComplexOptions,
} from 'console-table-printer/dist/src/models/external-table';

import { GAME_RESULT } from './enums';
import { Alignment } from './types';

import { ValidationError } from '../errors/errors';

interface IUI {
  proposeActions(_command: string, moves: string[]): void;
  welcome(): void;
  startGame(): void;
  sayGoodbye(): void;
  help(): void;
  finishWithError(error: ValidationError): void;
  finishGame(move: string): void;
  showWrongMoveError(error: Error): void;
}

interface IController {
  execute(command: string, isExternal?: boolean): void;
}

interface IValidator {
  validate(): boolean;
}

interface ITableCreator {
  getCommandsTable(): Table;
  getHelpTable();
}

interface IHMACGenerator {
  getHMAC(move: string): string;
  getKeyString(): string;
  updateKey(): void;
}

interface IGame {
  startNewGame(): void;
  getHMAC(): string;
  getHMACKey(): string;
  solveGameResult(
    moves: string[],
    userMoveIdx: number,
    pcMoveIdx: number
  ): GAME_RESULT;
  getGameResult(userMoveIdx: number): GAME_RESULT;
  getPCMove(): string;
}

interface IColumnSettingsBuilder {
  build(): ColumnOptionsRaw;
  setName(name: string): typeof this;
  setAlignment(alignment: Alignment): typeof this;
  setColor(color: typeof ForegroundColor): typeof this;
}

interface ITableSettingsBuilder {
  build(): ComplexOptions;
  setColumnSettings(columnOptions: ColumnOptionsRaw[]): typeof this;
  setTitle(title: string): typeof this;
  setBorderColor(color: typeof ForegroundColor): typeof this;
}

export {
  IUI,
  IController,
  IValidator,
  ITableCreator,
  IHMACGenerator,
  IGame,
  IColumnSettingsBuilder,
  ITableSettingsBuilder,
};
