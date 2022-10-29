import { FormControl } from '@angular/forms';
import { User } from '../../classes/user/user';
import { ToFormControl } from '../mutables/to-form-control';

// export type UserRegistrationFormControls = ToFormControl<
//   Pick<
//     User,
//     | 'userName'
//     | 'emailAddress'
//     | 'password'
//     | 'mobilePhone'
//     | 'authorizedUseOfData'
//     | 'pokemonGroupName'
//     | 'stateName'
//     | 'favoriteSeason'
//   >
// >;

export type UserRegistrationFormControls = {
  userName: FormControl<string>;
  emailAddress: FormControl<string>;
  password: FormControl<string>;
  mobilePhone: FormControl<string>;
};
