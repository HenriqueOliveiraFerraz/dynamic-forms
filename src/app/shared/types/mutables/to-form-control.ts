import { FormControl } from '@angular/forms';

export type ToFormControl<Type> = {
  [Properties in keyof Type]: FormControl<Type[Properties]>;
};
