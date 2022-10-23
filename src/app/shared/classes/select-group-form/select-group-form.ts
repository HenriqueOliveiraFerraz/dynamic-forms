import { FormControl } from '@angular/forms';
import { IBaseFormOptions } from '../../interfaces/base-form/i-base-form-options';
import { IGroupOptions } from '../../interfaces/base-form/i-group-options';
import { BaseForm } from '../base-form/base-form';

export class SelectGroupForm<
  ObjectKey extends {
    [Properties in keyof ObjectKey]: ObjectKey[Properties];
  }
> extends BaseForm<string | number | null, ObjectKey> {
  constructor(
    key: keyof ObjectKey,
    value: string | number | null,
    groupOptions: IGroupOptions[],
    options: IBaseFormOptions = {}
  ) {
    super(key, value, options);
    this.formControl = new FormControl<string | number | null>(value, {
      nonNullable: options.nonNullable,
      validators: options.validators,
      asyncValidators: options.asyncValidators,
      updateOn: options.updateOn,
    });
    this.groupOptions = groupOptions;
  }
  formControl: FormControl<string | number | null>;
  groupOptions: IGroupOptions[];
  override controlType: 'selectGroup' = 'selectGroup';
}
