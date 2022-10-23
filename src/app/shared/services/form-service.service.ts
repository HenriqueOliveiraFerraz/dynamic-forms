import { BooleanInput } from '@angular/cdk/coercion';
import { Injectable, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooleanForm } from '../classes/dynamic-forms/boolean-form/boolean-form';
import { NumberForm } from '../classes/dynamic-forms/number-form/number-form';
import { SelectGroupForm } from '../classes/dynamic-forms/select-group-form/select-group-form';
import { TextForm } from '../classes/dynamic-forms/text-form/text-form';
@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  toFormGroup<
    ControlsType extends {
      [Properties in keyof ControlsType]:
        | FormControl<string | null>
        | FormControl<boolean | null>
        | FormControl<number | null>;
    },
    InputType extends
      | TextForm<InputType>
      | BooleanForm<InputType>
      | NumberForm<InputType>
      | SelectGroupForm<InputType>
  >(inputs: InputType[]) {
    let controls: {
      [key: string]:
        | FormControl<string | null>
        | FormControl<boolean | null>
        | FormControl<number | null>
        | FormControl<string | number | null>;
    } = {};

    inputs.forEach((f) => {
      controls[f.key as keyof ControlsType as string] = f.formControl;
    });

    return new FormGroup(controls as ControlsType);
  }
}
