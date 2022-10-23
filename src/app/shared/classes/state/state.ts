import { IAutocompleteOptions } from '../../interfaces/base-form/i-autocomplete-options';

export class State implements IAutocompleteOptions {
  constructor(key: string, value: string, flag?: string) {
    this.key = key;
    this.value = value;
    this.flag = flag;
  }

  key: string;
  value: string;
  flag?: string;

  static getStates(): IAutocompleteOptions[] {
    return [
      {
        key: 'Arkansas',
        value: '2.978M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
      },
      {
        key: 'California',
        value: '39.14M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
      },
      {
        key: 'Florida',
        value: '20.27M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
      },
      {
        key: 'Texas',
        value: '27.47M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
      },
    ];
  }
}
