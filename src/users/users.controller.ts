import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';

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

  @Patch('/users/:id')
  updateUser(
    @Param('id') id: number,
    @Body() body: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(+id, body);
  }

  @Delete('/users/:id')
  softDeleteUser(@Param('id') id: string): Promise<void> {
    return this.usersService.softDelete(+id);
  }
}
