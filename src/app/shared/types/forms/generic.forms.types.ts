import { AutocompleteForm } from '../../classes/dynamic-forms/autocomplete-form/autocomplete-form';
import { BooleanForm } from '../../classes/dynamic-forms/boolean-form/boolean-form';
import { RadioGroupForm } from '../../classes/dynamic-forms/radio-group-form/radio-group-form';
import { SelectGroupForm } from '../../classes/dynamic-forms/select-group-form/select-group-form';
import { TextForm } from '../../classes/dynamic-forms/text-form/text-form';
import { FormControlsTypes } from './form.controls';

export type GenericFormsType<
  T extends { [Properties in keyof T]: FormControlsTypes }
> =
  | TextForm<T>
  | BooleanForm<T>
  | SelectGroupForm<T>
  | AutocompleteForm<T>
  | RadioGroupForm<T>;
