import { TicketsService } from './tickets.service';
import { Ticket } from './entities/ticket.entity';
import { Comment } from './entities/comment.entity';
import { CommentsService } from './comments.service';
export declare class TicketsController {
    private ticketsService;
    private commentsService;
    constructor(ticketsService: TicketsService, commentsService: CommentsService);
    getTickets(): Promise<Ticket[]>;
    getTicket(id: string): any;
    createTicket(body: any): Promise<Ticket>;
    updateTicket(id: string, body: any): Promise<Ticket>;
    softDeleteTicket(id: string): Promise<Ticket>;
    addComment(ticketId: string, body: any): Promise<any>;
    updateTicketComment(commentId: string, body: any): Promise<Comment>;
    softDeleteTicketComment(commentId: string): Promise<Comment>;
}
