import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { BooleanForm } from '../../classes/dynamic-forms/boolean-form/boolean-form';
import { NumberForm } from '../../classes/dynamic-forms/number-form/number-form';
import { TextForm } from '../../classes/dynamic-forms/text-form/text-form';
import { SelectGroupForm } from '../../classes/dynamic-forms/select-group-form/select-group-form';

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
> implements OnInit
{
  @Input()
  dynamicForm!: FormType;

  selectGroupOptions?: SelectGroupForm<FormType>;

  ngOnInit(): void {
    if (this.dynamicForm instanceof SelectGroupForm<FormType>) {
      this.selectGroupOptions = this.dynamicForm;
    }
  }
}
