import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dtos/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(email: string): Promise<User | User[]>;
    getUser(id: string): Promise<User>;
    getFilteredUsers(body: any): Promise<User[]>;
    updateUser(id: number, body: UpdateUserDto): Promise<User>;
    softDeleteUser(id: string): Promise<void>;
}
