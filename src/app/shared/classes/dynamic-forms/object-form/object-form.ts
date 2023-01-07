import { FormGroup } from '@angular/forms';
import { FormControlsTypes } from 'src/app/shared/types/forms/form.controls';
import { AutocompleteForm } from '../autocomplete-form/autocomplete-form';
import { BooleanForm } from '../boolean-form/boolean-form';
import { RadioGroupForm } from '../radio-group-form/radio-group-form';
import { SelectGroupForm } from '../select-group-form/select-group-form';
import { TextForm } from '../text-form/text-form';

export class ObjectForm<
  ControlsType extends {
    [Properties in keyof ControlsType]: FormControlsTypes | FormGroup<any>;
  },
  NestedFormGroup extends {
    [Properties in keyof NestedFormGroup]: FormGroup<ControlsType>;
  } = void,
  FormType extends
    | TextForm<
        Extract<ControlsType, { [P in keyof ControlsType]: FormControlsTypes }>
      >
    | BooleanForm<
        Extract<ControlsType, { [P in keyof ControlsType]: FormControlsTypes }>
      >
    | SelectGroupForm<
        Extract<ControlsType, { [P in keyof ControlsType]: FormControlsTypes }>
      >
    | AutocompleteForm<
        Extract<ControlsType, { [P in keyof ControlsType]: FormControlsTypes }>
      >
    | RadioGroupForm<
        Extract<ControlsType, { [P in keyof ControlsType]: FormControlsTypes }>
      > =
    | TextForm<
        Extract<ControlsType, { [P in keyof ControlsType]: FormControlsTypes }>
      >
    | BooleanForm<
        Extract<ControlsType, { [P in keyof ControlsType]: FormControlsTypes }>
      >
    | SelectGroupForm<
        Extract<ControlsType, { [P in keyof ControlsType]: FormControlsTypes }>
      >
    | AutocompleteForm<
        Extract<ControlsType, { [P in keyof ControlsType]: FormControlsTypes }>
      >
    | RadioGroupForm<
        Extract<ControlsType, { [P in keyof ControlsType]: FormControlsTypes }>
      >
> {
  constructor(dynamicForms: FormType[], key?: keyof NestedFormGroup) {
    this.dynamicForms = dynamicForms;
    if (key) {
      console.log(key);
    }
  }

  nestedFormKey: string = '';
  dynamicForms: FormType[];
}
