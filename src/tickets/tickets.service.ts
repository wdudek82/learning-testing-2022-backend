import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TicketsService {
  constructor(@InjectRepository(Ticket) private repo: Repository<Ticket>) {}

  findAll(title = ''): Promise<Ticket[]> {
    return this.repo.find();
  }

  findById(id: number): Promise<Ticket | null> {
    const ticket = this.repo.findOneBy({ id });
    return ticket;
  }

  update(id: number, updateTicketDto: any): Promise<Ticket> {
    return Promise.resolve(null);
  }

  async remove(id: number): Promise<Ticket> {
    const ticket = await this.repo.findOneBy({ id });
    if (ticket) {
      return this.repo.remove(ticket);
    }
  }
}
