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
  @IsOptional()
  imageUrl: string;

  @IsString()
  @IsOptional()
  bio: string;

  @IsEnum(Role)
  @IsOptional()
  role: Role = Role.USER;
}
