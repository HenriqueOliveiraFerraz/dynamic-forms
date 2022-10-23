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

  static getPokemons(): PokemonGroup[] {
    return [
      {
        name: 'Grass',
        array: [
          { key: 'bulbasaur-0', value: 'Bulbasaur' },
          { key: 'oddish-1', value: 'Oddish' },
          { key: 'bellsprout-2', value: 'Bellsprout' },
        ],
      },
      {
        name: 'Water',
        array: [
          { key: 'squirtle-3', value: 'Squirtle' },
          { key: 'psyduck-4', value: 'Psyduck' },
          { key: 'horsea-5', value: 'Horsea' },
        ],
      },
      {
        name: 'Fire',
        disabled: true,
        array: [
          { key: 'charmander-6', value: 'Charmander' },
          { key: 'vulpix-7', value: 'Vulpix' },
          { key: 'flareon-8', value: 'Flareon' },
        ],
      },
      {
        name: 'Psychic',
        array: [
          { key: 'mew-9', value: 'Mew' },
          { key: 'mewtwo-10', value: 'Mewtwo' },
        ],
      },
    ];
  }
}
