import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.UserService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.UserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.UserService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.UserService.remove(id);
  }
}
