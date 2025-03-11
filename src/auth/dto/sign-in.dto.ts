import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail()
  @ApiProperty({
    description: 'The email of the user',
    example: 'user@gmail.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'The password of the user',
    example: '12345',
  })
  password: string;
}
