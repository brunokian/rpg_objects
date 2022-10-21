import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _enemies: SimpleFighter[];

  constructor(player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  fight():number {
    this._enemies.every((enemy) => {
      while (this._player.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player.attack(enemy);
        enemy.attack(this._player);
      }
      return null;
    });
    return super.fight();
  }
}