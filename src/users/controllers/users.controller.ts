import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { Serialize } from '../../interceptors/serialize.interceptor';
import { UserDto } from '../dtos/user.dto';
import { AuthGuard } from '../../guards/auth.guard';
import { Request, Response } from 'express';

@Controller('users')
@Serialize(UserDto)
// @UseGuards(AuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/whoami')
  whoAmI(@Req() req: Request, @Res() res: Response): void {
    const user = req['currentUser'];
    res.status(HttpStatus.OK).json({
      authenticated: !!user,
      username: user?.name ?? null,
    });
  }

  @Get()
  getUsers(@Query('email') email: string): Promise<User | User[]> {
    if (email) {
      return this.usersService.findOneByEmail(email);
    }
    return this.usersService.find();
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.findOneById(+id);
  }

  @Post()
  getFilteredUsers(@Body() body: any): Promise<User[]> {
    // TODO: Implement users filters.
    // TODO: Use this endpoint instead getUsers with "email" query param.
    return Promise.resolve([]);
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
