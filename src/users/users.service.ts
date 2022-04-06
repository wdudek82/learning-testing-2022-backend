import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
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

  async update(id: number, attrs: Partial<User>): Promise<User> {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new Error('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new Error('user not found');
    }
    await this.repo.remove(user);
  }

  async softDelete(id: number): Promise<void> {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new Error('user not found');
    }
    user.deletedAt = new Date();
    await this.repo.save(user);
  }
}
