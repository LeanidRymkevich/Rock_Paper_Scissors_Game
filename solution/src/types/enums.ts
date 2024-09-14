enum MSG_TEXTS {
  AVAILABLE_MOVES = 'Available moves:',
  ENTER_CMD = 'Please enter the index of your move > ',
  WELCOME = 'Welcome to Generalized Rock-Paper-Scissors Game!',
  FAREWELL = 'Farewell!',
  WRONG_MOVES_ARGS = 'While app launching there must be provided non-repeated moves-arguments, number of which is odd and >= 3. Please restart app with correct params.',
}

enum CMD_NAMES {
  GREETINGS = 'greetings',
  EXIT = 'exit',
  HELP = 'help',
  FAILED_VALIDATION = 'failed_validation',
  ENTER_YOUR_MOVE = 'enter_your_move',
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
