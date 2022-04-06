import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto): Promise<User> {
    const { name, email, password, role } = body;
    return this.usersService.create(name, email, password, role);
  }

  @Post('/signin')
  authenticateUser(@Body() body: any): any {
    console.log(body);
    return {};
  }

  @Get('/users')
  getUsers(): Promise<User[]> {
    return this.usersService.find();
  }

  @Get('/users/:id')
  getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Put('/users/:id')
  updateUser(@Body() body: any, @Param('id') id: number): Promise<User> {
    return this.usersService.update(+id, body);
  }

  @Delete('/users/:id')
  softDeleteUser(@Param('id') id: string): Promise<void> {
    return this.usersService.softDelete(+id);
  }
}
