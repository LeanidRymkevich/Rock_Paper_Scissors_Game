import { Table } from 'console-table-printer';

import {
  CMD_NAMES,
  COMMAND_TABLE_COLUMN_TITLES,
  SPECIAL_MOVES,
} from '../../types/enums';
import { ITableCreator } from '../../types/interfaces';

import { COMMAND_TABLE_SETTINGS } from './tableConstants';

export default class TableCreator implements ITableCreator {
  private readonly moves: string[];

  public constructor(moves: string[]) {
    this.moves = moves;
  }

  public getCommandsTable(): Table {
    const table: Table = new Table(COMMAND_TABLE_SETTINGS);

    this.moves.forEach((move: string, index: number): void => {
      table.addRow({
        [COMMAND_TABLE_COLUMN_TITLES.INDEX]: `${index + 1}`,
        [COMMAND_TABLE_COLUMN_TITLES.MOVES_NAME]: move,
      });
    });
    table.addRow({
      [COMMAND_TABLE_COLUMN_TITLES.INDEX]: SPECIAL_MOVES.EXIT,
      [COMMAND_TABLE_COLUMN_TITLES.MOVES_NAME]: CMD_NAMES.EXIT,
    });
    table.addRow({
      [COMMAND_TABLE_COLUMN_TITLES.INDEX]: SPECIAL_MOVES.HELP,
      [COMMAND_TABLE_COLUMN_TITLES.MOVES_NAME]: CMD_NAMES.HELP,
    });

    return table;
  }

  public getGameMatrix(): boolean[][] {
    const result: boolean[][] = [];

    for (let i = 0; i < this.moves.length; i++) {
      const row: boolean[] = [];

      for (let j = 0; j < this.moves.length; j++) {
        row.push(j === 0);
      }
      result.push(row);
    }

    return result;
  }
}
