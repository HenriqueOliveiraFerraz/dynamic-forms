import { FormControl } from '@angular/forms';
import { AutocompleteForm } from '../autocomplete-form/autocomplete-form';
import { BooleanForm } from '../boolean-form/boolean-form';
import { RadioGroupForm } from '../radio-group-form/radio-group-form';
import { SelectGroupForm } from '../select-group-form/select-group-form';
import { TextForm } from '../text-form/text-form';

export class ObjectForm<
  ControlsType extends {
    [Properties in keyof ControlsType]:
      | FormControl<string | null>
      | FormControl<boolean | null>
      | FormControl<number | null>
      | FormControl<string | number | null>;
  },
  FormsTypes extends {
    [Properties in keyof FormsTypes]:
      | TextForm<ControlsType>
      | BooleanForm<ControlsType>
      | SelectGroupForm<ControlsType>
      | AutocompleteForm<ControlsType>
      | RadioGroupForm<ControlsType>;
  }
> {
  constructor(
    objectFormKey: keyof FormsTypes,
    dynamicForms: Array<FormsTypes>
  ) {
    this.objectFormKey = objectFormKey;
    this.dynamicForms = dynamicForms;
  }

  objectFormKey: keyof FormsTypes;
  dynamicForms: Array<FormsTypes> = [];
}
