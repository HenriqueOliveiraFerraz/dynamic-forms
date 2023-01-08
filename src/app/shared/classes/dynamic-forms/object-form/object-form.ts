import { FormGroup } from '@angular/forms';
import { ExtractObjFormControlsTypes } from 'src/app/shared/types/extract/extract.formcontrols.types';
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
  FormType extends
    | TextForm<ExtractObjFormControlsTypes<ControlsType>>
    | BooleanForm<ExtractObjFormControlsTypes<ControlsType>>
    | SelectGroupForm<ExtractObjFormControlsTypes<ControlsType>>
    | AutocompleteForm<ExtractObjFormControlsTypes<ControlsType>>
    | RadioGroupForm<ExtractObjFormControlsTypes<ControlsType>> =
    | TextForm<ExtractObjFormControlsTypes<ControlsType>>
    | BooleanForm<ExtractObjFormControlsTypes<ControlsType>>
    | SelectGroupForm<ExtractObjFormControlsTypes<ControlsType>>
    | AutocompleteForm<ExtractObjFormControlsTypes<ControlsType>>
    | RadioGroupForm<ExtractObjFormControlsTypes<ControlsType>>
> {
  constructor(
    dynamicForms: FormType[],
    key?: keyof Extract<
      ControlsType,
      { [P in keyof ControlsType]: FormGroup<any> }
    >
  ) {
    this.dynamicForms = dynamicForms;
    if (key) {
      console.log(key);
    }
  }

  dynamicForms: FormType[];
}
