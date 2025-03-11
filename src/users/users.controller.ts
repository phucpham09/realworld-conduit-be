import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Response,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IdDto } from 'src/utils/dto/id.dto';
import { Roles } from 'src/utils/decorators/roles.decorator';
import { Role } from 'src/utils/common/user-roles.enum';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Roles(Role.ADMIN)
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: IdDto) {
    return this.usersService.findOne({ id });
  }

  @Patch(':id')
  update(@Param() { id }: IdDto, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update({ id }, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param() { id }: IdDto, @Response() res) {
    await this.usersService.remove({ id });
    return res
      .status(200)
      .json({ message: `Deleted user ${id} successfully!` });
  }
}
