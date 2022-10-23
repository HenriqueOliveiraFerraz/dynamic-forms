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
  >
>;
