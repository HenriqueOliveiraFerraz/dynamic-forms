import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';
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
      | FormControl<string | number | null>
      | FormGroup<{
          [key: string]:
            | FormControl<string | null>
            | FormControl<boolean | null>
            | FormControl<number | null>
            | FormControl<string | number | null>;
        }>;
  },
  FormType extends
    | TextForm<ControlsType>
    | BooleanForm<ControlsType>
    | SelectGroupForm<ControlsType>
    | AutocompleteForm<ControlsType>
    | RadioGroupForm<ControlsType> =
    | TextForm<ControlsType>
    | BooleanForm<ControlsType>
    | SelectGroupForm<ControlsType>
    | AutocompleteForm<ControlsType>
    | RadioGroupForm<ControlsType>
> {
  constructor(dynamicForms: FormType[]) {
    this.dynamicForms = dynamicForms;
  }

  dynamicForms: FormType[];
}
