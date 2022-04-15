import { Request, Response } from 'express';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
import { AuthService } from '../services/auth.service';
import { SigninUserDto } from '../dtos/sigin-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    whoAmI(req: Request, res: Response): void;
    createUser(body: CreateUserDto, currentUser: User): Promise<User>;
    signUp(body: CreateUserDto, session: any): Promise<User>;
    signIn(body: SigninUserDto, session: any): Promise<User>;
    signOut(res: Response, session: any): void;
}
