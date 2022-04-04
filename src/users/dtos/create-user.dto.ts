import { IsEmail, IsEnum, IsString } from 'class-validator';

enum Role {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  USER = 'USER',
}

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(Role)
  role: Role = Role.USER;

  // createdAt: Date;
  // updatedAt: Date;
  // deletedAt: Date;
}
