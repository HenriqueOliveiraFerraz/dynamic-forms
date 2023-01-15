import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './shared/classes/user/user';
import { IUser } from './shared/interfaces/user/i-user';
import { DynamicFormService } from './shared/services/dynamic-form/dynamic-form.service';
import { FormService } from './shared/services/form/form.service';
import { UserRegistrationFormsControls } from './shared/types/user-forms/user-registration-forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user!: User;
  userFormGroup!: FormGroup<UserRegistrationFormsControls>;

  @ViewChild('dynamicFormComponentTop')
  dynamicFormComponentTop!: TemplateRef<any>;
  @ViewChild('dynamicFormComponentBottom')
  dynamicFormComponentBottom!: TemplateRef<any>;

  constructor(private dynamicForm: DynamicFormService) {}

  ngOnInit(): void {
    this.user = new User('', '', '', '', false, '', '', '', {
      street: 'Rua Terra Roxa',
      district: 'Jardim La Salle',
      houseNumber: 612,
      zipCode: '85903020',
      state: 'PR',
      country: 'BRA',
    });
    const teste = this.dynamicForm.toFormGroup(this.user);
    console.log(teste.value);
  }
}
