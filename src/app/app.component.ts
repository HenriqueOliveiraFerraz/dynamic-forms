import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './shared/classes/user/user';
import { UserRegistrationFormControls } from './shared/types/user-forms/user-registration-form-controls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user!: User;
  userFormGroup!: FormGroup<UserRegistrationFormControls>;

  constructor() {}

  ngOnInit(): void {
    this.user = new User('', '', '', '', false, '');
    console.log(this.user.getDynamicForms());
  }
}
