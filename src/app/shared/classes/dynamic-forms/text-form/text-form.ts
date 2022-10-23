import { FormControl } from '@angular/forms';
import { IBaseFormOptions } from 'src/app/shared/interfaces/base-form/i-base-form-options';
import { BaseForm } from '../base-form/base-form';

export class TextForm<
  ObjectKey extends {
    [Properties in keyof ObjectKey]: ObjectKey[Properties];
  }
> extends BaseForm<string | null, ObjectKey> {
  constructor(
    key: keyof ObjectKey,
    value: string | null,
    baseFormOptions: IBaseFormOptions = {}
  ) {
    super(key, value, baseFormOptions);
    this.formControl = new FormControl<string | null>(value, {
      nonNullable: baseFormOptions.nonNullable,
      validators: baseFormOptions.validators,
      asyncValidators: baseFormOptions.asyncValidators,
      updateOn: baseFormOptions.updateOn,
    });
  }
  formControl: FormControl<string | null>;
  override controlType: 'text' = 'text';
}
