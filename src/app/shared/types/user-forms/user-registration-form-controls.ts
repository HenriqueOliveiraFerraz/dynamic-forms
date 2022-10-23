import { User } from '../../classes/user/user';
import { ToFormControl } from '../mutables/to-form-control';

export type UserRegistrationFormControls = ToFormControl<
  Pick<
    User,
    | 'userName'
    | 'emailAddress'
    | 'password'
    | 'mobilePhone'
    | 'authorizedUseOfData'
    | 'pokemonGroupName'
  >
>;

// let teste: UserRegistrationFormControls = {
//   userName: new FormControl<string>('', { nonNullable: true }),
//   emailAddress: new FormControl<string>('', { nonNullable: true }),
//   password: new FormControl<string>('', { nonNullable: true }),
//   mobilePhone: new FormControl<string>('', { nonNullable: true }),
//   authorizedUseOfData: new FormControl<boolean>(false, { nonNullable: true }),
//   pokemonGroup: new FormControl<PokemonGroup | null>(null),
// };
