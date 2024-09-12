import { Table } from 'console-table-printer';

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

interface IMovesTable {
  getCommandsTable(): Table;
}

export { IUI, IController, IValidator, IMovesTable };
