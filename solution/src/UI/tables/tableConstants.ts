import {
  ColumnOptionsRaw,
  ComplexOptions,
} from 'console-table-printer/dist/src/models/external-table';

import { COMMAND_TABLE_COLUMN_TITLES, MSG_TEXTS } from '../../types/enums';

import ColumnSettingsCreator from './columnSettingsBuilder';
import TableSettingsBuilder from './tableSettingsBuilder';
import ColumnSettingsBuilder from './columnSettingsBuilder';

const TABLE_CONTENT_ALIGNMENT = 'center';

const COMMAND_TABLE_COLUMN_SETTINGS: ColumnOptionsRaw[] = [
  new ColumnSettingsBuilder()
    .setAlignment(TABLE_CONTENT_ALIGNMENT)
    .setColor('cyan')
    .setName(COMMAND_TABLE_COLUMN_TITLES.INDEX)
    .build(),
  new ColumnSettingsCreator()
    .setAlignment(TABLE_CONTENT_ALIGNMENT)
    .setColor('magenta')
    .setName(COMMAND_TABLE_COLUMN_TITLES.MOVES_NAME)
    .build(),
];

const COMMAND_TABLE_SETTINGS: ComplexOptions = new TableSettingsBuilder()
  .setTitle(MSG_TEXTS.AVAILABLE_MOVES)
  .setBorderColor('blue')
  .setColumnSettings(COMMAND_TABLE_COLUMN_SETTINGS)
  .build();

export { COMMAND_TABLE_SETTINGS };
