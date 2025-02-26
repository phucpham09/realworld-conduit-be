import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: CreateUserDto) {
    const userExist =
      (await this.usersService.findUserByEmail(signUpDto.email)) ||
      (await this.usersService.findUserByUsername(signUpDto.username));
    if (userExist) {
      throw new BadRequestException('User already exists');
    }
    const hashedPassword = await bcrypt.hash(signUpDto.password, 10);
    signUpDto.password = hashedPassword;
    return await this.usersService.create(signUpDto);
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) {
      return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const { password, ...result } = user;
      if (password) return result;
    }
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      id: user.userid,
      role: user.role,
      username: user.username,
      image: user.imageUrl,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
