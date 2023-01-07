import { FormControl } from '@angular/forms';

export type FormControlsTypes =
  | FormControl<string | null>
  | FormControl<boolean | null>
  | FormControl<number | null>
  | FormControl<string | boolean | number | null>;
