import { Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user/i-user';
import { UserRegistrationFormControls } from '../../types/user-forms/user-registration-form-controls';
import { AutocompleteForm } from '../dynamic-forms/autocomplete-form/autocomplete-form';
import { BooleanForm } from '../dynamic-forms/boolean-form/boolean-form';
import { RadioGroupForm } from '../dynamic-forms/radio-group-form/radio-group-form';
import { SelectGroupForm } from '../dynamic-forms/select-group-form/select-group-form';
import { TextForm } from '../dynamic-forms/text-form/text-form';
import { PokemonGroup } from '../pokemon/pokemon-group';
import { Season } from '../season/season';
import { State } from '../state/state';

export class User implements IUser {
  constructor(
    userName: string,
    emailAddress: string,
    password: string,
    mobilePhone: string,
    authorizedUseOfData: boolean,
    pokemonGroupName: string,
    stateName: string,
    favoriteSeason: string
  ) {
    this.userName = userName;
    this.emailAddress = emailAddress;
    this.password = password;
    this.mobilePhone = mobilePhone;
    this.authorizedUseOfData = authorizedUseOfData;
    this.pokemonGroupName = pokemonGroupName;
    this.stateName = stateName;
    this.favoriteSeason = favoriteSeason;

    this.generateDynamicForms();
  }

  userName: string;
  emailAddress: string;
  password: string;
  mobilePhone: string;
  authorizedUseOfData: boolean;
  pokemonGroupName: string;
  stateName: string;
  favoriteSeason: string;

  getDynamicForms(): (
    | TextForm<UserRegistrationFormControls>
    | BooleanForm<UserRegistrationFormControls>
    | SelectGroupForm<UserRegistrationFormControls>
    | AutocompleteForm<UserRegistrationFormControls>
    | RadioGroupForm<UserRegistrationFormControls>
  )[] {
    return this.dynamicForms;
  }

  private dynamicForms: (
    | TextForm<UserRegistrationFormControls>
    | BooleanForm<UserRegistrationFormControls>
    | SelectGroupForm<UserRegistrationFormControls>
    | AutocompleteForm<UserRegistrationFormControls>
    | RadioGroupForm<UserRegistrationFormControls>
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
        '-- None --',
        {
          validators: [Validators.required],
          label: 'Choose your pokemon group',
          error: 'Pokemon group required',
          required: true,
          order: 6,
        }
      ),
      new AutocompleteForm(
        'stateName',
        this.stateName,
        State.getStates(),
        'Population: ',
        {
          validators: [Validators.required],
          label: 'Choose your state',
          error: 'State is required',
          required: true,
          order: 7,
        }
      ),
      new RadioGroupForm(
        'favoriteSeason',
        this.favoriteSeason,
        Season.getSeasons(),
        {
          validators: [Validators.required],
          label: 'Choose your state',
          error: 'State is required',
          required: true,
          order: 8,
        }
      ),
    ];
  }
}
