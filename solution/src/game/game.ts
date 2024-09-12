import { GAME_RESULT } from '../types/enums';

export default class Game {
  private readonly moves: string[];

  public constructor(moves: string[]) {
    this.moves = moves;
  }

  public getMovesMatrix(): number[][] {
    const result = [];
    const length = this.moves.length;
    const half = Math.floor(this.moves.length / 2);

    for (let i = 0; i < length; i++) {
      const row = new Array(length);
      for (let j = 0; j < length; j++) {
        row[j] = Math.sign(((j - i + half + length) % length) - half);
      }
      result.push(row);
    }
    return result;
  }

  public getGameResult(userMove: string, computerMove: string): GAME_RESULT {
    const matrix: number[][] = this.getMovesMatrix();
    const result: number = matrix[+computerMove][+userMove];

    return !result
      ? GAME_RESULT.DRAW
      : result < 0
        ? GAME_RESULT.LOSE
        : GAME_RESULT.WIN;
  }
}
