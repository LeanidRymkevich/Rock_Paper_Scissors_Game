import {
  ColumnOptionsRaw,
  ComplexOptions,
} from 'console-table-printer/dist/src/models/external-table';
import { ForegroundColor } from 'chalk';

import {
  COMMAND_TABLE_COLUMN_TITLES,
  COMMANDS,
  MSG_TEXTS,
} from '../../types/enums';

import ColumnSettingsCreator from './columnSettingsBuilder';
import TableSettingsBuilder from './tableSettingsBuilder';
import ColumnSettingsBuilder from './columnSettingsBuilder';

const SPECIAL_COMMANDS_NAMES: Record<COMMANDS.EXIT | COMMANDS.HELP, string> = {
  [COMMANDS.EXIT]: 'exit',
  [COMMANDS.HELP]: 'help',
};

const TABLE_CONTENT_ALIGNMENT = 'center';
const HELP_TABLE_CORNER_TEXT = '⇩ PC \\ User ⇨';
const HELP_TABLE_VALUE_COLOR: typeof ForegroundColor = 'magenta';

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

const HELP_TABLE_COLUMN_SETTINGS: ColumnOptionsRaw[] = [
  new ColumnSettingsBuilder()
    .setAlignment(TABLE_CONTENT_ALIGNMENT)
    .setColor('cyan')
    .setName(HELP_TABLE_CORNER_TEXT)
    .build(),
];

const HELP_TABLE_SETTINGS: ComplexOptions = new TableSettingsBuilder()
  .setTitle(MSG_TEXTS.HELP_TABLE_TITLE)
  .setBorderColor('yellow')
  .setColumnSettings(HELP_TABLE_COLUMN_SETTINGS)
  .build();

export {
  COMMAND_TABLE_SETTINGS,
  HELP_TABLE_CORNER_TEXT,
  HELP_TABLE_SETTINGS,
  HELP_TABLE_VALUE_COLOR,
  SPECIAL_COMMANDS_NAMES,
};
