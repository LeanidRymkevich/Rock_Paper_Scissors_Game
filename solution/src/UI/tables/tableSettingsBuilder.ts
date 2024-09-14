// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

import { ForegroundColor } from 'chalk';
import {
  ColumnOptionsRaw,
  ComplexOptions,
} from 'console-table-printer/dist/src/models/external-table';
import { TableStyleDetails } from 'console-table-printer/dist/src/models/internal-table';

import { ITableSettingsBuilder } from '../../types/interfaces';

export default class TableSettingsBuilder implements ITableSettingsBuilder {
  private borderSettings: TableStyleDetails | null = null;
  private title: string = '';
  private columnOptions: ColumnOptionsRaw[] = [];

  public constructor() {}

  public build(): ComplexOptions {
    const result: ComplexOptions = {};
    result.title = this.title;
    result.columns = this.columnOptions;
    if (this.borderSettings) result.style = this.borderSettings;
    return result;
  }

  public setColumnSettings(columnOptions: ColumnOptionsRaw[]): typeof this {
    this.columnOptions = columnOptions;
    return this;
  }

  public setTitle(title: string): typeof this {
    this.title = title;
    return this;
  }

  public setBorderColor(color: typeof ForegroundColor): typeof this {
    this.borderSettings = {
      headerTop: {
        left: chalk[color]('╔'),
        mid: chalk[color]('╦'),
        right: chalk[color]('╗'),
        other: chalk[color]('═'),
      },
      headerBottom: {
        left: chalk[color]('╟'),
        mid: chalk[color]('╬'),
        right: chalk[color]('╢'),
        other: chalk[color]('═'),
      },
      tableBottom: {
        left: chalk[color]('╚'),
        mid: chalk[color]('╩'),
        right: chalk[color]('╝'),
        other: chalk[color]('═'),
      },
      vertical: chalk[color]('║'),
    };

    return this;
  }
}
