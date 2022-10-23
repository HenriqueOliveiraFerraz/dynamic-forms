import { IGroupOptions } from '../../interfaces/base-form/i-group-options';
import { PokemonOptions } from './pokemon-options';

export class PokemonGroup implements IGroupOptions {
  constructor(name: string, array: PokemonOptions[], disabled?: boolean) {
    this.name = name;
    this.array = array;
    this.disabled = disabled;
  }

  name: string;
  array: PokemonOptions[];
  disabled?: boolean;
}
