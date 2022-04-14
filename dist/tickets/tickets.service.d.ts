import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { Priority, Status } from './enums';
export declare class TicketsService {
    private repo;
    constructor(repo: Repository<Ticket>);
    create(title: string, description: string, authorId: number, assigneeId: number, priority: Priority, status: Status, relatedTicketId: number): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    findById(id: number): Promise<Ticket | null>;
    update(id: number, attrs: Partial<Ticket>): Promise<Ticket>;
    remove(id: number): Promise<Ticket>;
    softDelete(id: number): Promise<Ticket>;
}
