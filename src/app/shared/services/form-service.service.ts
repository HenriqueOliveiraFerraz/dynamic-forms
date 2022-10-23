import { BooleanInput } from '@angular/cdk/coercion';
import { Injectable, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooleanForm } from '../classes/boolean-form/boolean-form';
import { NumberForm } from '../classes/number-form/number-form';
import { TextForm } from '../classes/text-form/text-form';

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
  >(inputs: InputType[]) {
    let controls: {
      [key: string]:
        | FormControl<string | null>
        | FormControl<boolean | null>
        | FormControl<number | null>;
    } = {};

    inputs.forEach((f) => {
      controls[f.key as keyof ControlsType as string] = f.formControl;
    });

    return new FormGroup(controls as ControlsType);
  }
}
