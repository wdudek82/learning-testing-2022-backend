import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './enums';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  role: Role;

  // createdAt: Date;
  // updatedAt: Date;
  // deletedAt: Date;
}
