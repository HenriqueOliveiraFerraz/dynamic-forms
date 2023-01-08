import { FormGroup } from '@angular/forms';
import { ExtractObjFormControlsTypes } from 'src/app/shared/types/extract/extract.formcontrols.types';
import { FormControlsTypes } from 'src/app/shared/types/forms/form.controls';
import { GenericFormsTypes } from 'src/app/shared/types/forms/generic.forms.types';

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
  FormType extends GenericFormsTypes<
    ExtractObjFormControlsTypes<FormControlsType>
  > = GenericFormsTypes<ExtractObjFormControlsTypes<FormControlsType>>
> {
  constructor(
    dynamicForms: FormType[],
    formGroupHolder?: { [K in keyof FormGroupType]: FormType[] }
  ) {
    this.dynamicForms = dynamicForms;
    this.formGroupHolder = formGroupHolder;
  }

  dynamicForms: FormType[];
  formGroupHolder?: { [K in keyof FormGroupType]: FormType[] };
}
