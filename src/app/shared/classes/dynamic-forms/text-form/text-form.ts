import { FormControl } from '@angular/forms';
import { IBaseFormOptions } from 'src/app/shared/interfaces/base-form/i-base-form-options';
import { BaseForm } from '../base-form/base-form';

export class TextForm<
  ControlsType extends {
    [Properties in keyof ControlsType as string]:
      | FormControl<string | null>
      | FormControl<boolean | null>
      | FormControl<number | null>
      | FormControl<string | number | null>;
  }
> extends BaseForm<string | null, ControlsType> {
  constructor(
    key: keyof ControlsType,
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
