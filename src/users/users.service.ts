import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IdDto } from 'src/utils/dto/id.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne({ id }: IdDto) {
    return this.usersRepository.findOneBy({ userid: id });
  }
  findUserByEmail(email: string) {
    return this.usersRepository.findOneBy({ email: email });
  }

  findUserByUsername(username: string) {
    return this.usersRepository.findOneBy({ username: username });
  }

  async update({ id }: IdDto, updateUserDto: UpdateUserDto) {
    await this.usersRepository.update(id, updateUserDto);
    return this.usersRepository.findOneBy({ userid: id });
  }

  async remove({ id }: IdDto) {
    return await this.usersRepository.delete(id);
  }
}
