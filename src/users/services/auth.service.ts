import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
    private usersService: UsersService,
  ) {}

  async signup(newUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersService.findOneByEmail(newUserDto.email);
    if (user) {
      throw new BadRequestException('email in use');
    }

    // see if email is in use
    // hash the users password
    // create a new user and save it
    // return the user

    return this.usersService.create(newUserDto);
  }
}
