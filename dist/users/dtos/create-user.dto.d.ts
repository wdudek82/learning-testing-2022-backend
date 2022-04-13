import { Role } from '../enums';
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    role: Role;
    isActive: boolean;
}
