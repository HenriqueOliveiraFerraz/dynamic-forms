import { IAddress } from '../address/i-address';

export interface IUser {
  userName: string;
  emailAddress: string;
  password: string;
  mobilePhone: string;
  authorizedUseOfData: boolean;
  address: IAddress;
}
