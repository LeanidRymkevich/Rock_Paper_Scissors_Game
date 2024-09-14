import { ForegroundColor } from 'chalk';
import { ColumnOptionsRaw } from 'console-table-printer/dist/src/models/external-table';

import { Alignment } from '../../types/types';
import { IColumnSettingsBuilder } from '../../types/interfaces';

export default class ColumnSettingsBuilder implements IColumnSettingsBuilder {
  private name: string = '';
  private alignment: Alignment = 'left';
  private color: typeof ForegroundColor = 'blue';

  public constructor() {}

  public build(): ColumnOptionsRaw {
    return {
      name: this.name,
      color: this.color,
      alignment: this.alignment,
    };
  }

  public setName(name: string): typeof this {
    this.name = name;
    return this;
  }

  public setAlignment(alignment: Alignment): typeof this {
    this.alignment = alignment;
    return this;
  }

  public setColor(color: typeof ForegroundColor): typeof this {
    this.color = color;
    return this;
  }
}
