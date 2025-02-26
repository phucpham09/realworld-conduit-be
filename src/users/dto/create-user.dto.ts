import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { Role } from 'src/utils/common/user-roles.enum';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  imageUrl: string =
    'https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png';

  @IsString()
  @IsOptional()
  bio: string;

  @IsEnum(Role)
  @IsOptional()
  role: Role = Role.USER;
}
