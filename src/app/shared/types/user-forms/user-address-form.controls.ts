import { IAddress } from '../../interfaces/address/i-address';
import { ToFormControl } from '../mutables/to-form-control';

export type UserAddressFormsControls = ToFormControl<
  Pick<IAddress, 'street' | 'district' | 'state'>
>;
