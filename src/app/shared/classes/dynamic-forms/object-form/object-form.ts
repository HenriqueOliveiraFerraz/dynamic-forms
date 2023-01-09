import { FormGroup } from '@angular/forms';
import { ExtractObjFormControlsTypes } from 'src/app/shared/types/extract/extract.formcontrols.types';
import { FormControlsTypes } from 'src/app/shared/types/forms/form.controls';
import { GenericFormsTypes } from 'src/app/shared/types/forms/generic.forms.types';

export class ObjectForm<
  ControlsType extends {
    [Properties in keyof ControlsType]:
      | FormControlsTypes
      | FormGroup<{
          [key: string]: FormControlsTypes;
        }>;
  },
  FormGroupType extends {
    [key: string]: FormGroup<ControlsType>;
  } = {
    [key: string]: FormGroup<ControlsType>;
  },
  FormType extends GenericFormsTypes<
    ExtractObjFormControlsTypes<ControlsType>
  > = GenericFormsTypes<ExtractObjFormControlsTypes<ControlsType>>
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
