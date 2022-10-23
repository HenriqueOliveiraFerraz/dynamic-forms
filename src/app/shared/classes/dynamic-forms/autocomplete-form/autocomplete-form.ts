import { FormControl } from '@angular/forms';
import { IAutocompleteOptions } from 'src/app/shared/interfaces/base-form/i-autocomplete-options';
import { IBaseFormOptions } from 'src/app/shared/interfaces/base-form/i-base-form-options';
import { IOptions } from 'src/app/shared/interfaces/base-form/i-options';
import { BaseForm } from '../base-form/base-form';

export class AutocompleteForm<
  ObjectKey extends {
    [Properties in keyof ObjectKey]: ObjectKey[Properties];
  }
> extends BaseForm<string | null, ObjectKey> {
  constructor(
    key: keyof ObjectKey,
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
