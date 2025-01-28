import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Roles } from 'src/utils/common/user-roles.enum';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  imageUrl: string;

  @IsString()
  @IsOptional()
  bio: string;

  @IsNotEmpty()
  role: Roles;
}
