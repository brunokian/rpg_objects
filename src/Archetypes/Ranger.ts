import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energy: EnergyType;
  private static count = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Ranger.count += 1;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances() {
    return Ranger.count;
  }
}