import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ObjectForm } from '../../classes/dynamic-forms/object-form/object-form';
import { ExtractObjFormControlsTypes } from '../../types/extract/extract.formcontrols.types';
import { FormControlsTypes } from '../../types/forms/form.controls';
import { GenericFormsTypes } from '../../types/forms/generic.forms.types';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  toFormGroup<
    ControlsType extends {
      [Properties in keyof ControlsType]:
        | FormControlsTypes
        | FormGroup<{
            [key: string]: FormControlsTypes;
          }>;
    }
  >(objectForm: ObjectForm<ControlsType>) {
    let controls: {
      [key: string]: FormControlsTypes;
    } = objectForm.dynamicForms.reduce((accumulator, value) => {
      return {
        ...accumulator,
        [value.key as keyof ControlsType]: value.formControl,
      };
    }, {});

    return new FormGroup(controls);
  }

  getObjectKeys(obj: any, previousPath: string = ''): void {
    Object.keys(obj).forEach((key) => {
      const currentPath = previousPath ? `${previousPath}.${key}` : key;
      if (typeof obj[key] === 'object') {
        this.getObjectKeys(obj[key], currentPath);
      }
    });
  }

  static toFormGroup<
    ControlsType extends {
      [Properties in keyof ControlsType]:
        | FormControlsTypes
        | FormGroup<{
            [key: string]: FormControlsTypes;
          }>;
    },
    FormType extends GenericFormsTypes<
      ExtractObjFormControlsTypes<ControlsType>
    > = GenericFormsTypes<ExtractObjFormControlsTypes<ControlsType>>
  >(inputs: FormType[]) {
    let controls: {
      [key: string]: FormControlsTypes;
    } = inputs.reduce((accumulator, value) => {
      return {
        ...accumulator,
        [value.key as keyof ControlsType]: value.formControl,
      };
    }, {});

    return new FormGroup(controls as ControlsType);
  }
}
