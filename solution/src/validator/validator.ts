import {
  EvenMoveNumberError,
  NoMovesProvidedError,
  RepeatedMovesError,
  SmallMoveNumberError,
} from '../errors/errors';

import { IValidator } from '../types/interfaces';

export default class Validator implements IValidator {
  private readonly moves: string[];

  public constructor(moves: string[]) {
    this.moves = moves;
  }

  public validate(): boolean {
    this.checkMovesNum();
    this.checkForMatches();

    return true;
  }

  private checkMovesNum(): boolean {
    if (this.moves.length === 0) throw new NoMovesProvidedError();
    if (this.moves.length <= 1) throw new SmallMoveNumberError();
    if (this.moves.length % 2 === 0) throw new EvenMoveNumberError();

    return true;
  }

  private checkForMatches(): boolean {
    if (this.moves.length !== new Set(this.moves).size)
      throw new RepeatedMovesError();

    return true;
  }
}
