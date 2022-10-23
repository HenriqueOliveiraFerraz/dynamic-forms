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
    options: IBaseFormOptions = {}
  ) {
    super(key, value, options);
    this.formControl = new FormControl<string | null>(value, {
      nonNullable: options.nonNullable,
      validators: options.validators,
      asyncValidators: options.asyncValidators,
      updateOn: options.updateOn,
    });
  }
  formControl: FormControl<string | null>;
  override controlType: 'text' = 'text';
}
