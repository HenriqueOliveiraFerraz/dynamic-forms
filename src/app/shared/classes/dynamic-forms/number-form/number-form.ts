import { FormControl } from '@angular/forms';
import { IBaseFormOptions } from '../../interfaces/base-form/i-base-form-options';
import { BaseForm } from '../base-form/base-form';

export class NumberForm<
  ObjectKey extends {
    [Properties in keyof ObjectKey]: ObjectKey[Properties];
  }
> extends BaseForm<number | null, ObjectKey> {
  constructor(
    key: keyof ObjectKey,
    value: number | null,
    options: IBaseFormOptions = {}
  ) {
    super(key, value, options);
    this.formControl = new FormControl<number | null>(value, {
      nonNullable: options.nonNullable,
      validators: options.validators,
      asyncValidators: options.asyncValidators,
      updateOn: options.updateOn,
    });
  }
  formControl: FormControl<number | null>;
  override controlType: 'number' = 'number';
}
