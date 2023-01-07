import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { FormControlsTypes } from 'src/app/shared/types/forms/form.controls';
import { IBaseForm } from '../../../interfaces/base-form/i-base-form';
import { IBaseFormOptions } from '../../../interfaces/base-form/i-base-form-options';

export class BaseForm<
  ValueType extends string | number | boolean | null,
  ControlsType extends {
    [Properties in keyof ControlsType]: FormControlsTypes;
  }
> implements IBaseForm<ValueType, ControlsType>, IBaseFormOptions
{
  key: keyof ControlsType;
  value: ValueType;
  formControlName: string | number;
  matFormFieldAppearance: MatFormFieldAppearance;
  nonNullable: boolean;
  updateOn: 'change' | 'blur' | 'submit';
  validators: ValidatorFn[] | null;
  asyncValidators: AsyncValidatorFn[] | null;
  baseClass: string;
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
    key: keyof ControlsType,
    value: ValueType,
    baseFormOptions: IBaseFormOptions = {}
  ) {
    this.key = key;
    this.value = value;
    this.formControlName = key as string;
    this.matFormFieldAppearance =
      baseFormOptions.matFormFieldAppearance ?? 'outline';
    this.nonNullable = baseFormOptions.nonNullable ?? true;
    this.updateOn = baseFormOptions.updateOn ?? 'change';
    this.validators = baseFormOptions.validators ?? null;
    this.asyncValidators = baseFormOptions.asyncValidators ?? null;
    this.baseClass = baseFormOptions.baseClass || '';
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
