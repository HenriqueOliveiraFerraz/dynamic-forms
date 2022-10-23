import { Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user/i-user';
import { UserRegistrationFormControls } from '../../types/user-forms/user-registration-form-controls';
import { BooleanForm } from '../dynamic-forms/boolean-form/boolean-form';
import { SelectGroupForm } from '../dynamic-forms/select-group-form/select-group-form';
import { TextForm } from '../dynamic-forms/text-form/text-form';
import { PokemonGroup } from '../pokemon/pokemon-group';

export class User implements IUser {
  constructor(
    userName: string,
    emailAddress: string,
    password: string,
    mobilePhone: string,
    authorizedUseOfData: boolean,
    pokemonGroupName: string
  ) {
    this.userName = userName;
    this.emailAddress = emailAddress;
    this.password = password;
    this.mobilePhone = mobilePhone;
    this.authorizedUseOfData = authorizedUseOfData;
    this.pokemonGroupName = pokemonGroupName;
  }

  userName: string;
  emailAddress: string;
  password: string;
  mobilePhone: string;
  authorizedUseOfData: boolean;
  pokemonGroupName: string;

  private dynamicForms: (
    | TextForm<UserRegistrationFormControls>
    | BooleanForm<UserRegistrationFormControls>
    | SelectGroupForm<UserRegistrationFormControls>
  )[] = [];

  private generateDynamicForms(): void {
    this.dynamicForms = [
      new TextForm('userName', this.userName, {
        validators: [Validators.required],
        label: 'Username',
        error: 'Username required',
        required: true,
        order: 1,
      }),
      new TextForm('emailAddress', this.emailAddress, {
        validators: [Validators.required, Validators.email],
        label: 'Email Address',
        error: 'Email required',
        required: true,
        order: 2,
      }),
      new TextForm('password', this.password, {
        validators: [Validators.required],
        label: 'Password',
        error: 'Password required',
        required: true,
        order: 3,
      }),
      new TextForm('mobilePhone', this.mobilePhone, {
        validators: [Validators.required],
        label: 'Mobile Phone',
        error: 'Mobile Phone required',
        required: true,
        order: 4,
      }),
      new BooleanForm('authorizedUseOfData', this.authorizedUseOfData, {
        validators: [Validators.requiredTrue],
        label: 'Authorization to use data',
        error: 'Authorization required',
        required: true,
        order: 5,
      }),
      new SelectGroupForm(
        'pokemonGroupName',
        this.pokemonGroupName,
        PokemonGroup.getPokemons(),
        {
          validators: [Validators.required],
          label: 'Choose your pokemon group',
          error: 'Pokemon group required',
          required: true,
          order: 6,
        }
      ),
    ];
  }
}
