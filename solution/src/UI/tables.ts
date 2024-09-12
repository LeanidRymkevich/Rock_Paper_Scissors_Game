import { Table } from 'console-table-printer';
import { blue, ChalkFunction, magenta } from 'chalk';

import { CMD_NAMES, MSG_TEXTS, SPECIAL_MOVES } from '../types/enums';
import { IMovesTable } from '../types/interfaces';
import { TableStyleDetails } from 'console-table-printer/dist/src/models/internal-table';

export default class MovesTable implements IMovesTable {
  private readonly moves: string[];

  public constructor(moves: string[]) {
    this.moves = moves;
  }

  public getCommandsTable(): Table {
    const firstColumnName = 'Index';
    const secondColumnName = `Move's name`;
    const firstColumnSetups = {
      name: firstColumnName,
      alignment: 'center',
      color: 'cyan',
    };
    const secondColumnSetups = {
      name: secondColumnName,
      alignment: 'center',
      color: 'magenta',
    };

    const table: Table = new Table({
      style: this.getBorderParams(),
      title: MSG_TEXTS.AVAILABLE_MOVES,
      columns: [firstColumnSetups, secondColumnSetups],
    });

    this.moves.forEach((move: string, index: number): void => {
      table.addRow({
        [firstColumnName]: `${index + 1}`,
        [secondColumnName]: move,
      });
    });
    table.addRow({
      [firstColumnName]: SPECIAL_MOVES.EXIT,
      [secondColumnName]: CMD_NAMES.EXIT,
    });
    table.addRow({
      [firstColumnName]: SPECIAL_MOVES.HELP,
      [secondColumnName]: CMD_NAMES.HELP,
    });

    return table;
  }

  private getBorderParams(isHelpTable: boolean = false): TableStyleDetails {
    let colorFunc: ChalkFunction = blue;

    if (isHelpTable) colorFunc = magenta;

    return {
      headerTop: {
        left: colorFunc('╔'),
        mid: colorFunc('╦'),
        right: colorFunc('╗'),
        other: colorFunc('═'),
      },
      headerBottom: {
        left: colorFunc('╟'),
        mid: colorFunc('╬'),
        right: colorFunc('╢'),
        other: colorFunc('═'),
      },
      tableBottom: {
        left: colorFunc('╚'),
        mid: colorFunc('╩'),
        right: colorFunc('╝'),
        other: colorFunc('═'),
      },
      vertical: colorFunc('║'),
    };
  }
}
