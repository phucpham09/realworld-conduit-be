import { RegistryDate } from 'src/utils/common/registryDate';
import { Roles } from 'src/utils/common/user-roles.enum';

export class User {
  userId: number;
  username: string;
  email: string;
  password: string;
  imageUrl: string;
  bio: string;
  role: Roles;
  registryDate: RegistryDate;
}
