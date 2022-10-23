import { FormControl } from '@angular/forms';
import { IBaseFormOptions } from 'src/app/shared/interfaces/base-form/i-base-form-options';
import { IGroupOptions } from 'src/app/shared/interfaces/base-form/i-group-options';
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
    emptyOptionsLabel: string,
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
    this.emptyOptionsLabel = emptyOptionsLabel;
  }
  emptyOptionsLabel: string;
  formControl: FormControl<string | number | null>;
  groupOptions: IGroupOptions[];
  override controlType: 'selectGroup' = 'selectGroup';
}
