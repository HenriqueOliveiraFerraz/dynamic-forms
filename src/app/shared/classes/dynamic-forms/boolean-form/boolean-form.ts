import { FormControl } from '@angular/forms';
import { IBaseFormOptions } from '../../interfaces/base-form/i-base-form-options';
import { BaseForm } from '../base-form/base-form';

export class BooleanForm<
  ObjectKey extends {
    [Properties in keyof ObjectKey]: ObjectKey[Properties];
  }
> extends BaseForm<boolean | null, ObjectKey> {
  constructor(
    key: keyof ObjectKey,
    value: boolean | null,
    options: IBaseFormOptions = {}
  ) {
    super(key, value, options);
    this.formControl = new FormControl<boolean | null>(value, {
      nonNullable: options.nonNullable,
      validators: options.validators,
      asyncValidators: options.asyncValidators,
      updateOn: options.updateOn,
    });
  }
  formControl: FormControl<boolean | null>;
  override controlType: 'boolean' = 'boolean';
}
