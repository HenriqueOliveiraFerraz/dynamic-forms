import { IOptions } from '../../interfaces/base-form/i-options';

export class PokemonOptions implements IOptions {
  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  key: string;
  value: string;
}
