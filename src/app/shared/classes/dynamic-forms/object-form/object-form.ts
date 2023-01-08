import { FormGroup } from '@angular/forms';
import { ExtractObjFormControlsTypes } from 'src/app/shared/types/extract/extract.formcontrols.types';
import { FormControlsTypes } from 'src/app/shared/types/forms/form.controls';
import { GenericFormsType } from 'src/app/shared/types/forms/generic.forms.types';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType]: ObjectType[Key] extends {
    [key: string]: FormControlsTypes;
  }
    ? keyof FormControlsTypes
    : Key;
};

export class ObjectForm<
  ControlsType extends {
    [Properties in keyof ControlsType]: FormControlsTypes | FormGroup<any>;
  },
  FormType extends GenericFormsType<
    ExtractObjFormControlsTypes<ControlsType>
  > = GenericFormsType<ExtractObjFormControlsTypes<ControlsType>>
> {
  constructor(
    dynamicForms: FormType[],
    key?: keyof Extract<
      ControlsType,
      {
        [P in keyof ControlsType]: FormGroup<any>;
      }
    >
  ) {
    this.dynamicForms = dynamicForms;
    if (key) {
      console.log(key);
    }
  }

  dynamicForms: FormType[];
}
