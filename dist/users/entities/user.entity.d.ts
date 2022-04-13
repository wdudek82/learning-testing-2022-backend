import { Role } from '../enums';
export declare class User {
    id: number;
    email: string;
    name: string;
    password: string;
    role: Role;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
