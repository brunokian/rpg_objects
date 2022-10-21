import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _p1: Fighter;
  private _p2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._p1 = player1;
    this._p2 = player2;
  }

  public fight(): number {
    while (this._p1.lifePoints > 0 && this._p2.lifePoints > 0) {
      this._p1.attack(this._p2);
      this._p2.attack(this._p1);
    }
    return super.fight();
  }
}