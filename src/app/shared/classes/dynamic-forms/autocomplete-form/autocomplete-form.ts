import { FormControl } from '@angular/forms';
import { IAutocompleteOptions } from 'src/app/shared/interfaces/base-form/i-autocomplete-options';
import { IBaseFormOptions } from 'src/app/shared/interfaces/base-form/i-base-form-options';
import { IOptions } from 'src/app/shared/interfaces/base-form/i-options';
import { BaseForm } from '../base-form/base-form';

export class AutocompleteForm<
  ControlsType extends {
    [Properties in keyof ControlsType]:
      | FormControl<string | null>
      | FormControl<boolean | null>
      | FormControl<number | null>
      | FormControl<string | number | null>;
  }
> extends BaseForm<string | null, ControlsType> {
  constructor(
    key: keyof ControlsType,
    value: string | null,
    autocompleteOptions: IAutocompleteOptions[],
    smallElementLabel: string,
    baseFormOptions: IBaseFormOptions = {}
  ) {
    super(key, value, baseFormOptions);
    this.formControl = new FormControl<string | null>(value, {
      nonNullable: baseFormOptions.nonNullable,
      validators: baseFormOptions.validators,
      asyncValidators: baseFormOptions.asyncValidators,
      updateOn: baseFormOptions.updateOn,
    });
    this.autocompleteOptions = autocompleteOptions;
    this.smallElementLabel = smallElementLabel;
  }

  formControl: FormControl<string | null>;
  autocompleteOptions: IAutocompleteOptions[];
  smallElementLabel: string;
  override controlType: 'autocomplete' = 'autocomplete';
}
