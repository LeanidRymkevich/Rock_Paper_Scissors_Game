import { Table } from 'console-table-printer';

import { ValidationError } from '../errors/errors';
import { GAME_RESULT } from './enums';

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

interface IMovesTable {
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

export { IUI, IController, IValidator, IMovesTable, IHMACGenerator, IGame };
