import { FormControl } from '@angular/forms';
import { IBaseFormOptions } from 'src/app/shared/interfaces/base-form/i-base-form-options';
import { IGroupOptions } from 'src/app/shared/interfaces/base-form/i-group-options';
import { FormControlsTypes } from 'src/app/shared/types/forms/form.controls';
import { BaseForm } from '../base-form/base-form';

export class SelectGroupForm<
  ControlsType extends {
    [Properties in keyof ControlsType]: FormControlsTypes;
  }
> extends BaseForm<string | number | null, ControlsType> {
  constructor(
    key: keyof ControlsType,
    value: string | number | null,
    groupOptions: IGroupOptions[],
    emptyOptionsLabel: string,
    baseFormOptions: IBaseFormOptions = {}
  ) {
    super(key, value, baseFormOptions);
    this.formControl = new FormControl<string | number | null>(value, {
      nonNullable: baseFormOptions.nonNullable,
      validators: baseFormOptions.validators,
      asyncValidators: baseFormOptions.asyncValidators,
      updateOn: baseFormOptions.updateOn,
    });
    this.groupOptions = groupOptions;
    this.emptyOptionsLabel = emptyOptionsLabel;
  }

  emptyOptionsLabel: string;
  formControl: FormControl<string | number | null>;
  groupOptions: IGroupOptions[];
  override controlType: 'selectGroup' = 'selectGroup';
}
