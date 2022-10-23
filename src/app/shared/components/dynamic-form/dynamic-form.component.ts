import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { BooleanForm } from '../../classes/dynamic-forms/boolean-form/boolean-form';
import { NumberForm } from '../../classes/dynamic-forms/number-form/number-form';
import { TextForm } from '../../classes/dynamic-forms/text-form/text-form';
import { SelectGroupForm } from '../../classes/dynamic-forms/select-group-form/select-group-form';
import { AutocompleteForm } from '../../classes/dynamic-forms/autocomplete-form/autocomplete-form';
import { map, Observable, startWith } from 'rxjs';
import { IAutocompleteOptions } from '../../interfaces/base-form/i-autocomplete-options';

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
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent<
  FormType extends
    | TextForm<FormType>
    | BooleanForm<FormType>
    | NumberForm<FormType>
    | SelectGroupForm<FormType>
    | AutocompleteForm<FormType>
> implements OnInit
{
  @Input()
  dynamicForm!: FormType;

  selectGroupForm?: SelectGroupForm<FormType>;
  autocompleteForm?: AutocompleteForm<FormType>;
  filteredAutocompleteOptions?: Observable<IAutocompleteOptions[]>;

  ngOnInit(): void {
    this.configureInitialState();
  }

  configureInitialState(): void {
    if (this.dynamicForm instanceof SelectGroupForm<FormType>) {
      this.selectGroupForm = this.dynamicForm;
    } else if (this.dynamicForm instanceof AutocompleteForm<FormType>) {
      this.autocompleteForm = this.dynamicForm;
      this.filteredAutocompleteOptions =
        this.autocompleteForm.formControl.valueChanges.pipe(
          startWith(''),
          map((auto) =>
            auto
              ? this.filterAuto(auto)
              : this.autocompleteForm!.autocompleteOptions.slice()
          )
        );
    }
  }

  filterAuto(value: string): IAutocompleteOptions[] {
    const filterValue = value.toLowerCase();

    return this.autocompleteForm!.autocompleteOptions.filter((auto) =>
      auto.value.toLowerCase().includes(filterValue)
    );
  }
}
