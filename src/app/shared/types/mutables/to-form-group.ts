import { FormGroup } from '@angular/forms';
import { ToFormControl } from './to-form-control';

export type ToFormGroup<Type> = {
  [Properties in keyof Type]: FormGroup<ToFormControl<Type[Properties]>>;
};
