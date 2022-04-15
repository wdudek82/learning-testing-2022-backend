import { User } from '../../users/entities/user.entity';
import { Priority, Status } from '../enums';
import { Comment } from './comment.entity';
export declare class Ticket {
    id: number;
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    author: User;
    authorId: number;
    assignee: User;
    assigneeId: number;
    relatedTicketId?: number;
    relatedTicket?: Ticket;
    comments: Comment[];
    position: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
