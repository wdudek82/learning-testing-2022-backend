import { Response } from 'express';
import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Session,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
import { AuthService } from '../services/auth.service';
import { Serialize } from '../../interceptors/serialize.interceptor';
import { SigninUserDto } from '../dtos/sigin-user.dto';
import { UserDto } from '../dtos/user.dto';
import { CurrentUser } from '../decorators/current-user.decorator';
import { Role } from '../enums';
import { AuthGuard } from '../../guards/auth.guard';

@Controller('auth')
@Serialize(UserDto)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/create-user')
  @UseGuards(AuthGuard)
  createUser(
    @Body() body: CreateUserDto,
    @CurrentUser() currentUser: User,
  ): Promise<User> {
    if (currentUser.role !== Role.ADMIN) {
      throw new UnauthorizedException(
        'only admins are authorized to create new users',
      );
    }
    return this.authService.createUser(body);
  }

  @Post('/signup')
  async signup(
    @Body() body: CreateUserDto,
    @Session() session: any,
  ): Promise<User> {
    // TODO: This rout is tempararily disabled.
    //  Users will be probably created only by admins.
    // const user = await this.authService.createUser(body);
    // session.userId = user.id;
    // return user;
    throw new BadRequestException(
      'this endpoint has been temporarily disabled',
    );
    return null;
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
    const message = 'user has been logged out';
    session.userId = null;
    res.status(HttpStatus.RESET_CONTENT).json({ message });
  }
}
