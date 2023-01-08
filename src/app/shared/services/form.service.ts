import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutocompleteForm } from '../classes/dynamic-forms/autocomplete-form/autocomplete-form';
import { BooleanForm } from '../classes/dynamic-forms/boolean-form/boolean-form';
import { RadioGroupForm } from '../classes/dynamic-forms/radio-group-form/radio-group-form';
import { SelectGroupForm } from '../classes/dynamic-forms/select-group-form/select-group-form';
import { TextForm } from '../classes/dynamic-forms/text-form/text-form';
import { ExtractObjFormControlsTypes } from '../types/extract/extract.formcontrols.types';
import { FormControlsTypes } from '../types/forms/form.controls';
import { GenericFormsType } from '../types/forms/generic.forms.types';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  toFormGroup<
    ControlsType extends {
      [Properties in keyof ControlsType]: FormControlsTypes | FormGroup<any>;
    },
    FormType extends GenericFormsType<
      ExtractObjFormControlsTypes<ControlsType>
    > = GenericFormsType<ExtractObjFormControlsTypes<ControlsType>>
  >(inputs: FormType[]) {
    let controls: {
      [key: string]: FormControlsTypes;
    } = inputs.reduce((accumulator, value) => {
      return {
        ...accumulator,
        [value.key as keyof ControlsType as string]: value.formControl,
      };
    }, {});

    return new FormGroup(controls as ControlsType);
  }

  static toFormControls<
    ControlsType extends {
      [Properties in keyof ControlsType]:
        | FormControl<string | null>
        | FormControl<boolean | null>
        | FormControl<number | null>
        | FormControl<string | number | null>;
    },
    FormType extends
      | TextForm<ControlsType>
      | BooleanForm<ControlsType>
      | SelectGroupForm<ControlsType>
      | AutocompleteForm<ControlsType>
      | RadioGroupForm<ControlsType>
  >(inputs: FormType[]) {
    let controls: {
      [key: string]:
        | FormControl<string | null>
        | FormControl<boolean | null>
        | FormControl<number | null>
        | FormControl<string | number | null>;
    } = inputs.reduce((accumulator, value) => {
      return {
        ...accumulator,
        [value.key as keyof ControlsType as string]: value.formControl,
      };
    }, {});

    return controls as ControlsType;
  }
}
