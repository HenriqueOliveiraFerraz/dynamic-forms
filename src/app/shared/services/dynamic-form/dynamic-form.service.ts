import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  toFormGroup<
    Type extends {
      [TypeChildren in keyof Type]: Type[TypeChildren];
    },
    FormControls extends {
      [FormControlsKeys in keyof Type]: FormControl<Type[FormControlsKeys]>;
    }
  >(obj: Type) {
    return new FormGroup<FormControls>(
      this.createFormControls<Type, FormControls>(obj)
    );
  }

  private createFormControls<
    Type extends {
      [TypeChildren in keyof Type]: Type[TypeChildren];
    },
    FormControls extends {
      [FormControlsKeys in keyof Type]: FormControl<Type[FormControlsKeys]>;
    }
  >(obj: Type) {
    const keys = Object.keys(obj);
    let controls: FormControls = keys.reduce((accumulator, key) => {
      const typedKey = key as keyof Type;
      const value = obj[typedKey];
      return {
        ...accumulator,
        [typedKey]: new FormControl<typeof value>(value),
      };
    }, {} as FormControls);
    return controls;
  }
}
