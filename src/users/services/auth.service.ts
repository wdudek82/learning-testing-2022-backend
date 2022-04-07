import { Injectable } from '@nestjs/common';
import { Role } from '../enums';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(
    name: string,
    email: string,
    password: string,
    role: Role,
  ): Promise<User> {
    const user = this.repo.create({ name, email, password, role });
    return this.repo.save(user);
  }
}
