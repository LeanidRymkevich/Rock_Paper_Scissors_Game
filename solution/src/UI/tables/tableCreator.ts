import { Table } from 'console-table-printer';

import {
  CMD_NAMES,
  COMMAND_TABLE_COLUMN_TITLES,
  SPECIAL_MOVES,
} from '../../types/enums';
import { IGame, ITableCreator } from '../../types/interfaces';

import {
  COMMAND_TABLE_SETTINGS,
  HELP_TABLE_CORNER_TEXT,
} from './tableConstants';

export default class TableCreator implements ITableCreator {
  private readonly moves: string[];
  private readonly game: IGame;

  public constructor(moves: string[], game: IGame) {
    this.moves = moves;
    this.game = game;
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

  public getHelpTable(): Table {
    const table: Table = new Table();
    const length: number = this.moves.length;

    for (let i = 0; i < length; i++) {
      const row = {};
      for (let j = 0; j <= length; j++) {
        if (j === 0) {
          row[HELP_TABLE_CORNER_TEXT] = this.moves[i];
        } else {
          row[this.moves[j - 1]] = this.game.solveGameResult(
            this.moves,
            i,
            j - 1
          );
        }
      }
      table.addRow(row);
    }

    return table;
  }
}
