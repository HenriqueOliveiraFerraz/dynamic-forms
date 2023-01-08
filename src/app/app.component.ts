import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './shared/classes/user/user';
import { FormService } from './shared/services/form.service';
import { UserRegistrationForms } from './shared/types/user-forms/user-registration-forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user!: User;
  userFormGroup!: FormGroup<UserRegistrationForms>;

  @ViewChild('dynamicFormComponentTop')
  dynamicFormComponentTop!: TemplateRef<any>;
  @ViewChild('dynamicFormComponentBottom')
  dynamicFormComponentBottom!: TemplateRef<any>;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.user = new User('', '', '', '', false, '', '', '', {
      street: 'Rua Terra Roxa',
      district: 'Jardim La Salle',
      houseNumber: 612,
      zipCode: '85903020',
      state: 'PR',
      country: 'BRA',
    });
    this.userFormGroup = this.formService.toFormGroup(
      this.user.objectForm.dynamicForms
    );
  }
}
