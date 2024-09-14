import HMACGenerator from './hmacgenerator';

import { GAME_RESULT } from '../types/enums';
import { IGame, IHMACGenerator } from '../types/interfaces';
import { GameResultSign } from '../types/types';

export default class Game implements IGame {
  private readonly moves: string[];
  private readonly hmac: IHMACGenerator;

  private pcMoveIdx: number;

  public constructor(moves: string[]) {
    this.moves = moves;
    this.hmac = new HMACGenerator();
    this.pcMoveIdx = this.getPCMove();
  }

  public static getGameResultSign(
    moves: string[],
    userMoveIdx: number,
    pcMoveIdx: number
  ): GameResultSign {
    const length = moves.length;
    const half = Math.floor(moves.length / 2);
    return Math.sign(
      ((pcMoveIdx - userMoveIdx + half + length) % length) - half
    ) as GameResultSign;
  }

  public startNewGame(): void {
    this.pcMoveIdx = this.getPCMove();
    this.hmac.updateKey();
  }

  public getHMAC(): string {
    return this.hmac.getHMAC(this.moves[this.pcMoveIdx]);
  }

  public getHMACKey(): string {
    return this.hmac.getKeyString();
  }

  public getGameResult(userMoveIdx: number): GAME_RESULT {
    const sign: GameResultSign = Game.getGameResultSign(
      this.moves,
      userMoveIdx,
      this.pcMoveIdx
    );

    return !sign
      ? GAME_RESULT.DRAW
      : sign < 0
        ? GAME_RESULT.LOSE
        : GAME_RESULT.WIN;
  }

  private getPCMove(): number {
    return Math.floor(Math.random() * this.moves.length);
  }
}
