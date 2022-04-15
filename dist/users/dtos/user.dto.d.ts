import { Role } from '../enums';
export declare class UserDto {
    id: number;
    name: string;
    email: string;
    role: Role;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
