import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
export declare class AuthService {
    private repo;
    private usersService;
    constructor(repo: Repository<User>, usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    signIn(email: string, password: string): Promise<User>;
}
