import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';
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
  constructor(dynamicForms: FormType[], formGroupKey?: keyof FormGroupType) {
    this.dynamicForms = dynamicForms;
    if (formGroupKey) {
      this.formGroupHolder = {};
      this.formGroupHolder[formGroupKey as string] = FormService.toFormGroup(
        this.dynamicForms
      );
    }
  }

  dynamicForms: FormType[];
  formGroupHolder?: {
    [key: string]: FormGroup<FormControlsType>;
  };
}
