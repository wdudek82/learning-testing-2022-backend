import { Response } from 'express';
import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Session,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
import { AuthService } from '../services/auth.service';
import { Serialize } from '../../interceptors/serialize.interceptor';
import { SigninUserDto } from '../dtos/sigin-user.dto';
import { UserDto } from '../dtos/user.dto';

@Controller('auth')
@Serialize(UserDto)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async createUser(
    @Body() body: CreateUserDto,
    @Session() session: any,
  ): Promise<User> {
    const user = await this.authService.signup(body);
    session.userId = user.id;
    return user;
  }

  @Post('/signin')
  async authenticateUser(
    @Body() body: SigninUserDto,
    @Session() session: any,
  ): Promise<User> {
    const { email, password } = body;
    const user = await this.authService.signin(email, password);
    session.userId = user.id;
    return user;
  }

  @Post('/signout')
  signout(@Res() res: Response, @Session() session: any): void {
    session.userId = null;
    res.status(HttpStatus.RESET_CONTENT).json([]);
  }
}
