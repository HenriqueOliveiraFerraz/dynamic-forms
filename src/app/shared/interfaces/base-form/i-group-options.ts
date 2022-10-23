import { IOptions } from './i-options';

export interface IGroupOptions {
  name: string;
  array: IOptions[];
  disabled?: boolean;
}
