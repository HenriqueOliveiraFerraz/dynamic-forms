import { IUser } from '../../interfaces/user/i-user';
import { PokemonGroup } from '../pokemon/pokemon-group';

export class User implements IUser {
  constructor(
    userName: string,
    emailAddress: string,
    password: string,
    mobilePhone: string,
    authorizedUseOfData: boolean,
    pokemonGroups: PokemonGroup[]
  ) {
    this.userName = userName;
    this.emailAddress = emailAddress;
    this.password = password;
    this.mobilePhone = mobilePhone;
    this.authorizedUseOfData = authorizedUseOfData;
    this.pokemonGroups = pokemonGroups;
  }

  userName: string;
  emailAddress: string;
  password: string;
  mobilePhone: string;
  authorizedUseOfData: boolean;
  pokemonGroups: PokemonGroup[];
}
