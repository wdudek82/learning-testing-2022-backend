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

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto): any {
    console.log(`Create a new user: ${JSON.stringify(body)}`);

    const { name, email, password, role } = body;
    return this.usersService.create(name, email, password, role);
  }

  @Post('/signin')
  authenticateUser(@Body() body: any): any {
    console.log(body);
    return {};
  }

  @Get('users')
  getUsers(): any[] {
    return ['a', 'b', 'c'];
  }

  @Get(':id')
  getUser(@Param('id') userId: number): any {
    console.log(`Get a user: ${userId}`);
    return null;
  }

  @Put(':id')
  updateUser(@Body() body: any, @Param('id') userId: number): void {
    console.log(`Update a new user: ${userId} | ${JSON.stringify(body)}`);
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: number): void {
    console.log(`Delete a new user: ${userId}`);
  }
}
