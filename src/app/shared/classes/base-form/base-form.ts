import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { IBaseForm } from '../../interfaces/base-form/i-base-form';
import { IBaseFormOptions } from '../../interfaces/base-form/i-base-form-options';

export class BaseForm<ValueType, ObjectKey extends {}>
  implements IBaseForm<ValueType, ObjectKey>, IBaseFormOptions
{
  key: string | keyof ObjectKey;
  value: ValueType | null;
  formControlName: string | number;
  matFormFieldAppearance: MatFormFieldAppearance;
  nonNullable: boolean;
  updateOn: 'change' | 'blur' | 'submit';
  validators: ValidatorFn[] | null;
  asyncValidators: AsyncValidatorFn[] | null;
  error: string;
  placeholder: string;
  label: string;
  hint: string;
  icon: { name: string; suffix?: boolean; prefix?: boolean };
  prefix: string;
  suffix: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: { key: string; value: string }[];

  constructor(
    key: string | keyof ObjectKey,
    value: ValueType | null,
    options: IBaseFormOptions = {}
  ) {
    this.key = key;
    this.value = value;
    this.formControlName = key as string | number;
    this.matFormFieldAppearance = options.matFormFieldAppearance ?? 'outline';
    this.nonNullable = options.nonNullable ?? true;
    this.updateOn = options.updateOn ?? 'change';
    this.validators = options.validators ?? null;
    this.asyncValidators = options.asyncValidators ?? null;
    this.error = options.error || '';
    this.placeholder = options.placeholder || '';
    this.label = options.label || '';
    this.hint = options.hint || '';
    this.icon = options.icon ?? { name: '', suffix: false, prefix: false };
    this.prefix = options.prefix || '';
    this.suffix = options.suffix || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }
}
