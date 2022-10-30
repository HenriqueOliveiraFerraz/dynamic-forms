import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../classes/user/user';
import { IAddress } from '../../interfaces/address/i-address';
import { ToFormControl } from '../mutables/to-form-control';
import { UserAddressFormControls } from './user-address-form.controls';

export type UserRegistrationForms = ToFormControl<
  Pick<
    User,
    | 'userName'
    | 'emailAddress'
    | 'password'
    | 'mobilePhone'
    | 'authorizedUseOfData'
    | 'pokemonGroupName'
    | 'favoriteSeason'
    | 'stateName'
  >
> & {
  address: FormGroup<UserAddressFormControls>;
};

let teste: UserRegistrationForms = {
  userName: new FormControl<string>('', { nonNullable: true }),
  emailAddress: new FormControl<string>('', { nonNullable: true }),
  password: new FormControl<string>('', { nonNullable: true }),
  mobilePhone: new FormControl<string>('', { nonNullable: true }),
  authorizedUseOfData: new FormControl<boolean>(false, { nonNullable: true }),
  pokemonGroupName: new FormControl<string>('', { nonNullable: true }),
  favoriteSeason: new FormControl<string>('', { nonNullable: true }),
  stateName: new FormControl<string>('', { nonNullable: true }),
  address: new FormGroup({
    street: new FormControl<string>('', { nonNullable: true }),
    district: new FormControl<string>('', { nonNullable: true }),
    state: new FormControl<string>('', { nonNullable: true }),
  }),
};

console.log(teste);
