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

export { CustomError, NoCommandError };
