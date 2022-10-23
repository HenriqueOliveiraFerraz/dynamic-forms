import { FormControl } from '@angular/forms';
import { IBaseFormOptions } from 'src/app/shared/interfaces/base-form/i-base-form-options';
import { BaseForm } from '../base-form/base-form';

export class NumberForm<
  ObjectKey extends {
    [Properties in keyof ObjectKey]: ObjectKey[Properties];
  }
> extends BaseForm<number | null, ObjectKey> {
  constructor(
    key: keyof ObjectKey,
    value: number | null,
    baseFormOptions: IBaseFormOptions = {}
  ) {
    super(key, value, baseFormOptions);
    this.formControl = new FormControl<number | null>(value, {
      nonNullable: baseFormOptions.nonNullable,
      validators: baseFormOptions.validators,
      asyncValidators: baseFormOptions.asyncValidators,
      updateOn: baseFormOptions.updateOn,
    });
  }
  formControl: FormControl<number | null>;
  override controlType: 'number' = 'number';
}
