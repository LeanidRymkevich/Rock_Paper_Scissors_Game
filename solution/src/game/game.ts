import HMACGenerator from './hmacgenerator';

import { GAME_RESULT } from '../types/enums';
import { IGame, IHMACGenerator } from '../types/interfaces';

export default class Game implements IGame {
  private readonly moves: string[];
  private readonly hmac: IHMACGenerator;

  private pcMoveIdx: number;

  public constructor(moves: string[]) {
    this.moves = moves;
    this.hmac = new HMACGenerator();
    this.pcMoveIdx = this.generatePCMove();
  }

  public startNewGame(): void {
    this.pcMoveIdx = this.generatePCMove();
    this.hmac.updateKey();
  }

  public getPCMove(): string {
    return this.moves[this.pcMoveIdx];
  }

  public getHMAC(): string {
    return this.hmac.getHMAC(this.moves[this.pcMoveIdx]);
  }

  public getHMACKey(): string {
    return this.hmac.getKeyString();
  }

  public solveGameResult(
    moves: string[],
    userMoveIdx: number,
    pcMoveIdx: number
  ): GAME_RESULT {
    const length = moves.length;
    const half = Math.floor(moves.length / 2);
    const sign: number = Math.sign(
      ((pcMoveIdx - userMoveIdx + half + length) % length) - half
    );

    return !sign
      ? GAME_RESULT.DRAW
      : sign < 0
        ? GAME_RESULT.LOSE
        : GAME_RESULT.WIN;
  }

  public getGameResult(userMoveIdx: number): GAME_RESULT {
    return this.solveGameResult(this.moves, userMoveIdx, this.pcMoveIdx);
  }

  private generatePCMove(): number {
    return Math.floor(Math.random() * this.moves.length);
  }
}
