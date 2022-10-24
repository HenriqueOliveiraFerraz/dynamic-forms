import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AutocompleteForm } from './shared/classes/dynamic-forms/autocomplete-form/autocomplete-form';
import { BooleanForm } from './shared/classes/dynamic-forms/boolean-form/boolean-form';
import { RadioGroupForm } from './shared/classes/dynamic-forms/radio-group-form/radio-group-form';
import { SelectGroupForm } from './shared/classes/dynamic-forms/select-group-form/select-group-form';
import { TextForm } from './shared/classes/dynamic-forms/text-form/text-form';
import { User } from './shared/classes/user/user';
import { DynamicFormComponent } from './shared/components/dynamic-form/dynamic-form.component';
import { FormService } from './shared/services/form.service';
import { UserRegistrationFormControls } from './shared/types/user-forms/user-registration-form-controls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  user!: User;
  userFormGroup!: FormGroup<UserRegistrationFormControls>;

  @ViewChildren(DynamicFormComponent)
  dynamicFormComponents!: QueryList<
    DynamicFormComponent<
      UserRegistrationFormControls,
      | TextForm<UserRegistrationFormControls>
      | BooleanForm<UserRegistrationFormControls>
      | SelectGroupForm<UserRegistrationFormControls>
      | AutocompleteForm<UserRegistrationFormControls>
      | RadioGroupForm<UserRegistrationFormControls>
    >
  >;
  @ViewChild('dynamicFormComponentTop')
  dynamicFormComponentTop!: TemplateRef<any>;
  @ViewChild('dynamicFormComponentBottom')
  dynamicFormComponentBottom!: TemplateRef<any>;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.user = new User('', '', '', '', false, '', '', '');
    this.userFormGroup = this.formService.toFormGroup(
      this.user.getDynamicForms()
    );
  }

  ngAfterViewInit(): void {
    this.dynamicFormComponents.forEach((f) => {});
  }
}
