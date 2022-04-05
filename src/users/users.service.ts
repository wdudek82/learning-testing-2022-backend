import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './enums';

@Injectable()
export class UsersService {
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

  findOne(id: number): Promise<User> {
    const user = this.repo.findOneBy({ id });
    return user;
  }

  find(): Promise<User[]> {
    return this.repo.find();
  }

  update() {}

  async remove(id: number): Promise<void> {
    const user = await this.repo.findOneBy({ id });
    if (user) {
      await this.repo.remove(user);
    }
  }
}
