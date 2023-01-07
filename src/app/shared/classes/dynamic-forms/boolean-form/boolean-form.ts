import { FormControl, FormGroup } from '@angular/forms';
import { IBaseFormOptions } from 'src/app/shared/interfaces/base-form/i-base-form-options';
import { FormControlsTypes } from 'src/app/shared/types/forms/form.controls';
import { BaseForm } from '../base-form/base-form';

export class BooleanForm<
  ControlsType extends {
    [Properties in keyof ControlsType]: FormControlsTypes;
  }
> extends BaseForm<boolean | null, ControlsType> {
  constructor(
    key: keyof ControlsType,
    value: boolean | null,
    baseFormOptions: IBaseFormOptions = {}
  ) {
    super(key, value, baseFormOptions);
    this.formControl = new FormControl<boolean | null>(value, {
      nonNullable: baseFormOptions.nonNullable,
      validators: baseFormOptions.validators,
      asyncValidators: baseFormOptions.asyncValidators,
      updateOn: baseFormOptions.updateOn,
    });
  }
  formControl: FormControl<boolean | null>;
  override controlType: 'boolean' = 'boolean';
}
