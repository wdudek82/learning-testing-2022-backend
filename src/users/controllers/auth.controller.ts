import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
import { AuthService } from '../services/auth.service';
import { Serialize } from '../../interceptors/serialize.interceptor';

@Controller('auth')
@Serialize(User)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto): Promise<User> {
    const { name, email, password, role } = body;
    return this.authService.create(name, email, password, role);
  }

  @Post('/signin')
  authenticateUser(@Body() body: any): any {
    // TODO: Implement
    console.log(body);
    return {};
  }
}
