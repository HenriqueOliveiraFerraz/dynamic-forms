import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormControlsTypes } from '../../types/forms/form.controls';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  toFormGroup<
    Type extends {
      [TypeChildren in keyof Type]: Type[TypeChildren];
    }
  >(obj: Type) {
    type FormControls = {
      [FormControlsChildren in keyof Type]:
        | FormControlsTypes<Type[FormControlsChildren]>
        | FormGroup<{
            [key: string]: FormControlsTypes<Type[FormControlsChildren]>;
          }>;
    };
    return new FormGroup(this.createFormControls<Type, FormControls>(obj));
  }

  private createFormControls<
    Type extends {
      [TypeChildren in keyof Type]: Type[TypeChildren];
    },
    FormControls extends {
      [FormControlsChildren in keyof Type]:
        | FormControlsTypes<Type[FormControlsChildren]>
        | FormGroup<{
            [key: string]: FormControlsTypes<Type[FormControlsChildren]>;
          }>;
    }
  >(obj: Type) {
    const keys = Object.keys(obj);
    let controls: FormControls = keys.reduce((accumulator, key) => {
      const keyof = key as keyof FormControls;
      const value = obj[keyof];
      if (typeof value === 'object') {
        type CurrentObj = typeof value;
        // type FormObj = {
        //   [FormObjChildren in keyof FormControls]:
        //     | FormControlsTypes<FormControls[FormObjChildren]>
        //     | FormGroup<{
        //         [key: string]: FormControlsTypes<CurrentObj[FormObjChildren]>;
        //       }>;
        // };
        let nestedControls = this.createFormControls(
          value
        ) as unknown as FormControls;
        return {
          ...accumulator,
          [keyof]: new FormGroup(nestedControls),
        };
      } else {
        let control = {
          [keyof as keyof FormControls]: new FormControl<typeof value>(value, {
            nonNullable: true,
          }),
        };
        return {
          ...accumulator,
          control,
        };
      }
    }, {} as FormControls);
    return controls;
  }
}
