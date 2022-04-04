import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './enums';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(
    name: string,
    email: string,
    password: string,
    role: Role,
  ): Promise<User> {
    const user = this.repo.create({ name, email, password, role });
    return await this.repo.save(user);
  }
}
