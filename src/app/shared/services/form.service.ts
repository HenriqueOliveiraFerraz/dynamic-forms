import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AutocompleteForm } from '../classes/dynamic-forms/autocomplete-form/autocomplete-form';
import { BooleanForm } from '../classes/dynamic-forms/boolean-form/boolean-form';
import { NumberForm } from '../classes/dynamic-forms/number-form/number-form';
import { RadioGroupForm } from '../classes/dynamic-forms/radio-group-form/radio-group-form';
import { SelectGroupForm } from '../classes/dynamic-forms/select-group-form/select-group-form';
import { TextForm } from '../classes/dynamic-forms/text-form/text-form';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  toFormGroup<
    ControlsType extends {
      [Properties in keyof ControlsType as string]: FormControl<string | null>;
    },
    InputType extends TextForm<ControlsType> = TextForm<ControlsType>
  >(inputs: InputType[]) {
    inputs.forEach((value) => {
      console.log(value);
    });
  }
}
