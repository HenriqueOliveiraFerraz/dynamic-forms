import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { IBaseForm } from '../../../interfaces/base-form/i-base-form';
import { IBaseFormOptions } from '../../../interfaces/base-form/i-base-form-options';

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

  constructor(
    key: string | keyof ObjectKey,
    value: ValueType | null,
    baseFormOptions: IBaseFormOptions = {}
  ) {
    this.key = key;
    this.value = value;
    this.formControlName = key as string | number;
    this.matFormFieldAppearance =
      baseFormOptions.matFormFieldAppearance ?? 'outline';
    this.nonNullable = baseFormOptions.nonNullable ?? true;
    this.updateOn = baseFormOptions.updateOn ?? 'change';
    this.validators = baseFormOptions.validators ?? null;
    this.asyncValidators = baseFormOptions.asyncValidators ?? null;
    this.error = baseFormOptions.error || '';
    this.placeholder = baseFormOptions.placeholder || '';
    this.label = baseFormOptions.label || '';
    this.hint = baseFormOptions.hint || '';
    this.icon = baseFormOptions.icon ?? {
      name: '',
      suffix: false,
      prefix: false,
    };
    this.prefix = baseFormOptions.prefix || '';
    this.suffix = baseFormOptions.suffix || '';
    this.required = !!baseFormOptions.required;
    this.order =
      baseFormOptions.order === undefined ? 1 : baseFormOptions.order;
    this.controlType = baseFormOptions.controlType || '';
    this.type = baseFormOptions.type || '';
  }
}
