class CustomError extends Error {
  public constructor(msg: string) {
    super(msg);
  }
}

class NoCommandError extends CustomError {
  public readonly command: string;

  public constructor(command: string) {
    super(`Command with id: ${command} doesn't exist!`);
    this.command = command;
  }
}

class ValidationError extends CustomError {
  public constructor(msg: string) {
    super(msg);
  }
}

class NoMovesProvidedError extends ValidationError {
  public constructor() {
    super('No moves provided during launching the app!');
  }
}

class SmallMoveNumberError extends ValidationError {
  public constructor() {
    super('Wrong move number. It must be odd number >= 3.');
  }
}

class EvenMoveNumberError extends ValidationError {
  public constructor() {
    super('Even number of moves has been provided! It must be odd!');
  }
}

class RepeatedMovesError extends ValidationError {
  public constructor() {
    super('Some provided moves are repeated! All moves must be unique!');
  }
}

export {
  CustomError,
  NoCommandError,
  ValidationError,
  NoMovesProvidedError,
  EvenMoveNumberError,
  SmallMoveNumberError,
  RepeatedMovesError,
};
