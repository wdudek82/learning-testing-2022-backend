import { User } from '../../users/entities/user.entity';
import { Ticket } from './ticket.entity';
export declare class Comment {
    id: number;
    ticketId: number;
    ticket: Ticket;
    content: string;
    authorId: number;
    author: User;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
