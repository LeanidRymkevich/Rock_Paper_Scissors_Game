enum MSG_TEXTS {
  TRY_AGAIN_OR_LEAVE = 'To try again or to leave chose option from moves below.',
  GAME_RESULTS = 'Game ends with your ',
  YOU = 'You ',
  YOUR_MOVE = 'Your move: ',
  PC_MOVE = 'Computer move: ',
  HMAC = 'HMAC: ',
  HMAC_KEY = 'HMAC key: ',
  INDEX = 'index',
  AVAILABLE_MOVES = 'Available moves:',
  HELP_TABLE_TITLE = 'Win-lose-draw moves matrix:',
  ENTER_CMD = `Please enter your next move's`,
  WELCOME = 'Welcome to Generalized Rock-Paper-Scissors Game!',
  FAREWELL = 'Farewell!',
  WRONG_MOVES_ARGS = 'While app launching there must be provided non-repeated moves-arguments, number of which is odd and >= 3. Please, restart app with correct params.',
  WRONG_ENTERED_MOVE = 'Please, enter a move INDEX from the table below.',
}

enum CMD_NAMES {
  WELCOME = 'greetings',
  EXIT = 'exit',
  HELP = 'help',
  FAILED_VALIDATION = 'failed_validation',
  START_GAME = 'start',
}

enum SPECIAL_MOVES {
  EXIT = '0',
  HELP = '?',
}

enum GAME_RESULT {
  WIN = 'WIN',
  LOSE = 'LOSE',
  DRAW = 'DRAW',
}

enum COMMAND_TABLE_COLUMN_TITLES {
  INDEX = 'Index',
  MOVES_NAME = `Move's name`,
}

export {
  MSG_TEXTS,
  CMD_NAMES,
  SPECIAL_MOVES,
  GAME_RESULT,
  COMMAND_TABLE_COLUMN_TITLES,
};
