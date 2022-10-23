import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, Form } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TextForm } from 'src/app/shared/classes/text-form/text-form';
import { BooleanForm } from 'src/app/shared/classes/boolean-form/boolean-form';
import { NumberForm } from 'src/app/shared/classes/number-form/number-form';

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
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent<
  FormType extends
    | TextForm<FormType>
    | BooleanForm<FormType>
    | NumberForm<FormType>
> {
  @Input()
  dynamicForm!: FormType;
}
