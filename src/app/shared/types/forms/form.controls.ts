import { FormControl } from '@angular/forms';

export type FormControlsTypes<
  T extends string | number | boolean | null | void = void
> = T extends void | null
  ?
      | FormControl<string>
      | FormControl<boolean>
      | FormControl<number>
      | FormControl<string | null>
      | FormControl<boolean | null>
      | FormControl<number | null>
      | FormControl<string | boolean | number | null>
  : FormControl<T>;
