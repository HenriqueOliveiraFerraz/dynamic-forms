import { IOptions } from '../../interfaces/base-form/i-options';

export class Season implements IOptions {
  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  key: string;
  value: string;

  static getSeasons(): IOptions[] {
    return [
      { key: 'winter', value: 'Winter' },
      { key: 'spring', value: 'Spring' },
      { key: 'summer', value: 'Summer' },
      { key: 'autumn', value: 'Autumn' },
    ];
  }
}
