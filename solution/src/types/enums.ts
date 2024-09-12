enum MSG_TEXTS {
  ENTER_CMD = 'Please enter next command > ',
  WELCOME = 'Welcome to Generalized Rock-Paper-Scissors Game!',
  FAREWELL = 'Farewell!',
  WRONG_MOVES_ARGS = 'While app launching there must be provided non-repeated moves-arguments, number of which is odd and >= 3. Please restart app with correct params.',
}

enum CMD_NAMES {
  GREETINGS = 'greetings',
  EXIT = 'exit',
  HELP = 'help',
  FAILED_VALIDATION = 'failed_validation',
}

enum SPECIAL_MOVES {
  EXIT = '0',
  HELP = '?',
}

export { MSG_TEXTS, CMD_NAMES, SPECIAL_MOVES };
