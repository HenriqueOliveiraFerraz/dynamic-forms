import { FormControl } from '@angular/forms';

export type FormControlsTypes<T = void> = T extends void | null | undefined
  ?
      | FormControl<string>
      | FormControl<boolean>
      | FormControl<number>
      | FormControl<string | null>
      | FormControl<boolean | null>
      | FormControl<number | null>
      | FormControl<string | boolean | number | null>
  : FormControl<T>;
