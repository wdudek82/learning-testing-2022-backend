import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // @Column()
  // priority: Priority;

  // @Column()
  // status: Status;

  // @Column()
  // assignedTo: User;

  // @Column()
  // createdBy: User;

  // @Column()
  // @OneToMany()
  // ticketId: number;

  // @Column()
  // attachments: Attachemnts[];

  // createAt: Date;
  // updatedAt: Date;
  // deletedAt: Date;
}
