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
      | FormGroup<T>;
  },
  T extends {
    [Properties in keyof T]: FormControl<string | null>;
  },
  FormType extends TextForm<keyof ControlsType> = TextForm<keyof ControlsType>
> {
  constructor(dynamicForms: FormType[]) {
    this.dynamicForms = dynamicForms;
  }

  dynamicForms: FormType[];
}
