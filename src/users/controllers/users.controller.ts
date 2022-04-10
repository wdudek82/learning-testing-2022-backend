import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { Serialize } from '../../interceptors/serialize.interceptor';
import { UserDto } from '../dtos/user.dto';
import { CurrentUser } from '../decorators/current-user.decorator';
import { AuthGuard } from '../../guards/auth.guard';

@Controller('users')
@Serialize(UserDto)
// @UseGuards(AuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/whoami')
  whoAmI(@CurrentUser() user: User): User | null {
    return user;
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.find();
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.findOneById(+id);
  }

  @Patch('/:id')
  updateUser(
    @Param('id') id: number,
    @Body() body: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(+id, body);
  }

  @Delete('/:id')
  softDeleteUser(@Param('id') id: string): Promise<void> {
    return this.usersService.softDelete(+id);
  }
}
