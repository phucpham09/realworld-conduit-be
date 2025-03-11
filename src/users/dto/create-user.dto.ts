import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { Role } from 'src/utils/common/user-roles.enum';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  username: string;

  @IsEmail()
  @ApiProperty({
    description: 'The email of the user',
    example: 'user@gmail.com',
  })
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsString()
  @ApiProperty()
  imageUrl: string =
    'https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png';

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  bio: string;

  @IsEnum(Role)
  @IsOptional()
  @ApiProperty()
  role: Role = Role.USER;
}
