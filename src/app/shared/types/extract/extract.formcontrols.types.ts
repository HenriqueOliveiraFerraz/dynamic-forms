import { FormControlsTypes } from '../forms/form.controls';

export type ExtractObjFormControlsTypes<T> = Extract<
  T,
  { [P in keyof T]: FormControlsTypes }
>;
