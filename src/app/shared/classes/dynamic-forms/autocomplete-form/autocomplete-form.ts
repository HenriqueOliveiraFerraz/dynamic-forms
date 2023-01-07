import { FormControl } from '@angular/forms';
import { IAutocompleteOptions } from 'src/app/shared/interfaces/base-form/i-autocomplete-options';
import { IBaseFormOptions } from 'src/app/shared/interfaces/base-form/i-base-form-options';
import { FormControlsTypes } from 'src/app/shared/types/forms/form.controls';
import { BaseForm } from '../base-form/base-form';

export class AutocompleteForm<
  ControlsType extends {
    [Properties in keyof ControlsType]: FormControlsTypes;
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
