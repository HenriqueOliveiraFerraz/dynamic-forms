import { FormGroup } from '@angular/forms';
import { User } from '../../classes/user/user';
import { ToFormControl } from '../mutables/to-form-control';
import { UserAddressFormsControls } from './user-address-form.controls';

export type UserRegistrationFormsControls = ToFormControl<
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
  address: FormGroup<UserAddressFormsControls>;
};

// let teste: UserRegistrationFormsControls = {
//   userName: new FormControl<string>('', { nonNullable: true }),
//   emailAddress: new FormControl<string>('', { nonNullable: true }),
//   password: new FormControl<string>('', { nonNullable: true }),
//   mobilePhone: new FormControl<string>('', { nonNullable: true }),
//   authorizedUseOfData: new FormControl<boolean>(false, { nonNullable: true }),
//   pokemonGroupName: new FormControl<string>('', { nonNullable: true }),
//   favoriteSeason: new FormControl<string>('', { nonNullable: true }),
//   stateName: new FormControl<string>('', { nonNullable: true }),
//   address: new FormGroup({
//     street: new FormControl<string>('', { nonNullable: true }),
//     district: new FormControl<string>('', { nonNullable: true }),
//     state: new FormControl<string>('', { nonNullable: true }),
//   }),
// };

// console.log(teste);
