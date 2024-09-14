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
  showEnterCommandMsg(_command: string, moves: string[]): void;
  showWelcomeMsg(): void;
  showFarewellMsg(): void;
  showHelpMsg(_command: string, moves: string[]): void;
  showValidationError(error: ValidationError): void;
}

interface IController {
  execute(command: string, isExternal?: boolean): void;
}

interface IValidator {
  validate(): boolean;
}

interface ITableCreator {
  getCommandsTable(): Table;
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
  getGameResult(userMoveIdx: number): GAME_RESULT;
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
