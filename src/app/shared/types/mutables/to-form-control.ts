import { FormControl } from '@angular/forms';

export type ToFormControl<Type> = {
  [Property in keyof Type]: FormControl<Type[Property]>;
};
