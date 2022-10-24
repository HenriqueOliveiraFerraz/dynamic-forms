import { FormControl } from '@angular/forms';
import { IBaseFormOptions } from 'src/app/shared/interfaces/base-form/i-base-form-options';
import { IOptions } from 'src/app/shared/interfaces/base-form/i-options';
import { BaseForm } from '../base-form/base-form';

export class RadioGroupForm<
  ObjectKey extends {
    [Properties in keyof ObjectKey]: ObjectKey[Properties];
  }
> extends BaseForm<string | number | null, ObjectKey> {
  constructor(
    key: keyof ObjectKey,
    value: string | number | null,
    options: IOptions[],
    baseFormOptions: IBaseFormOptions = {}
  ) {
    super(key, value, baseFormOptions);
    this.formControl = new FormControl<string | number | null>(value, {
      nonNullable: baseFormOptions.nonNullable,
      validators: baseFormOptions.validators,
      asyncValidators: baseFormOptions.asyncValidators,
      updateOn: baseFormOptions.updateOn,
    });
    this.options = options;
  }

  formControl: FormControl<string | number | null>;
  options: IOptions[];
  override controlType: 'radioGroup' = 'radioGroup';
}
