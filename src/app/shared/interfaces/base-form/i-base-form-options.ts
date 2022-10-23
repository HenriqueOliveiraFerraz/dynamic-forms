import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { IOptions } from './i-options';

export interface IBaseFormOptions {
  formControlName?: string | number;
  matFormFieldAppearance?: MatFormFieldAppearance;
  nonNullable?: boolean;
  updateOn?: 'change' | 'blur' | 'submit';
  validators?: ValidatorFn[] | null;
  asyncValidators?: AsyncValidatorFn[] | null;
  error?: string;
  placeholder?: string;
  label?: string;
  hint?: string;
  icon?: { name: string; suffix?: boolean; prefix?: boolean };
  prefix?: string;
  suffix?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  type?: string;
  options?: IOptions[];
}
