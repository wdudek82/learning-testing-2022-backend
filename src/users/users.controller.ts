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
import { User } from './user.entity';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto): Promise<User> {
    console.log(`Create a new user: ${JSON.stringify(body)}`);

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
    console.log(`Get a user: ${id}`);
    return this.usersService.findOne(+id);
  }

  @Put('/users/:id')
  updateUser(@Body() body: any, @Param('id') userId: number): void {
    console.log(`Update a new user: ${userId} | ${JSON.stringify(body)}`);
  }

  @Delete('/users/:id')
  deleteUser(@Param('id') id: string): Promise<void> {
    console.log(`Delete a new user: ${id}`);
    return this.usersService.remove(+id);
  }
}
