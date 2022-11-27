import { FormControl, FormGroup } from '@angular/forms';
import { IBaseFormOptions } from 'src/app/shared/interfaces/base-form/i-base-form-options';
import { IOptions } from 'src/app/shared/interfaces/base-form/i-options';
import { BaseForm } from '../base-form/base-form';

export class RadioGroupForm<
  ControlsType extends {
    [Properties in keyof ControlsType]:
      | FormControl<string | null>
      | FormControl<boolean | null>
      | FormControl<number | null>
      | FormControl<string | number | null>
      | FormGroup<{
          [key: string]:
            | FormControl<string | null>
            | FormControl<boolean | null>
            | FormControl<number | null>
            | FormControl<string | number | null>;
        }>;
  }
> extends BaseForm<string | number | null, ControlsType> {
  constructor(
    key: keyof ControlsType,
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
