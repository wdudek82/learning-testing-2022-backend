import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(newUserDto: CreateUserDto): Promise<User>;
    findOneById(id: number, activityState?: boolean[]): Promise<User>;
    findOneByEmail(email: string): Promise<User | null>;
    find(activityState?: boolean[]): Promise<User[]>;
    update(id: number, attrs: Partial<User>): Promise<User>;
    remove(id: number): Promise<void>;
    softDelete(id: number): Promise<void>;
}
