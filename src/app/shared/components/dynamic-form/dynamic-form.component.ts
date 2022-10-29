import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';

import { BooleanForm } from '../../classes/dynamic-forms/boolean-form/boolean-form';
import { NumberForm } from '../../classes/dynamic-forms/number-form/number-form';
import { TextForm } from '../../classes/dynamic-forms/text-form/text-form';
import { SelectGroupForm } from '../../classes/dynamic-forms/select-group-form/select-group-form';
import { AutocompleteForm } from '../../classes/dynamic-forms/autocomplete-form/autocomplete-form';
import { map, Observable, startWith } from 'rxjs';
import { IAutocompleteOptions } from '../../interfaces/base-form/i-autocomplete-options';
import { RadioGroupForm } from '../../classes/dynamic-forms/radio-group-form/radio-group-form';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatRadioModule,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent<
  ControlsType extends {
    [Properties in keyof ControlsType]:
      | FormControl<string | null>
      | FormControl<boolean | null>
      | FormControl<number | null>
      | FormControl<string | number | null>;
  },
  FormType extends
    | TextForm<ControlsType>
    | BooleanForm<ControlsType>
    | NumberForm<ControlsType>
    | SelectGroupForm<ControlsType>
    | AutocompleteForm<ControlsType>
    | RadioGroupForm<ControlsType>
> implements OnInit
{
  @Input()
  dynamicForm!: FormType;
  @Input()
  componentTop?: TemplateRef<any>;
  @Input()
  componentBottom?: TemplateRef<any>;

  selectGroupForm?: SelectGroupForm<ControlsType>;
  autocompleteForm?: AutocompleteForm<ControlsType>;
  radioGroupForm?: RadioGroupForm<ControlsType>;
  filteredAutocompleteOptions?: Observable<IAutocompleteOptions[]>;

  ngOnInit(): void {
    this.configureInitialState();
  }

  configureInitialState(): void {
    if (this.dynamicForm instanceof SelectGroupForm<ControlsType>) {
      this.configureSelectGroup(
        this.dynamicForm as SelectGroupForm<ControlsType>
      );
    } else if (this.dynamicForm instanceof AutocompleteForm<ControlsType>) {
      this.configureAutocomplete(
        this.dynamicForm as AutocompleteForm<ControlsType>
      );
    } else if (this.dynamicForm instanceof RadioGroupForm<ControlsType>) {
      this.configureRadioGroup(
        this.dynamicForm as RadioGroupForm<ControlsType>
      );
    }
  }

  configureSelectGroup(selectGroup: SelectGroupForm<ControlsType>): void {
    this.selectGroupForm = selectGroup;
  }

  configureAutocomplete(auto: AutocompleteForm<ControlsType>): void {
    this.autocompleteForm = auto;
    this.filteredAutocompleteOptions =
      this.autocompleteForm.formControl.valueChanges.pipe(
        startWith(''),
        map((autoValue) =>
          autoValue
            ? this.filterAuto(autoValue)
            : this.autocompleteForm!.autocompleteOptions.slice()
        )
      );
  }

  configureRadioGroup(radio: RadioGroupForm<ControlsType>): void {
    this.radioGroupForm = radio;
  }

  filterAuto(value: string): IAutocompleteOptions[] {
    const filterValue = value.toLowerCase();

    return this.autocompleteForm!.autocompleteOptions.filter((auto) =>
      auto.value.toLowerCase().includes(filterValue)
    );
  }
}
