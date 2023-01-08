import { FormGroup } from '@angular/forms';
import { ExtractObjFormControlsTypes } from 'src/app/shared/types/extract/extract.formcontrols.types';
import { FormControlsTypes } from 'src/app/shared/types/forms/form.controls';
import { GenericFormsType } from 'src/app/shared/types/forms/generic.forms.types';

export class ObjectForm<
  FormControlsType extends {
    [Properties in keyof FormControlsType]:
      | FormControlsTypes
      | FormGroup<{
          [key: string]: FormControlsTypes;
        }>;
  },
  FormGroupType extends {
    [key: string]: FormGroup<FormControlsType>;
  } = {
    [key: string]: FormGroup<FormControlsType>;
  },
  FormType extends GenericFormsType<
    ExtractObjFormControlsTypes<FormControlsType>
  > = GenericFormsType<ExtractObjFormControlsTypes<FormControlsType>>
> {
  constructor(dynamicForms: FormType[], key?: keyof FormGroupType) {
    this.dynamicForms = dynamicForms;
    if (key) {
      console.log(key);
    }
  }

  dynamicForms: FormType[];
}
