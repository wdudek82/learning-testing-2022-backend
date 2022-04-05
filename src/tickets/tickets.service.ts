import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TicketsService {
  constructor(@InjectRepository(Ticket) private repo: Repository<Ticket>) {}

  async findAll(): Promise<Ticket[]> {
    return await this.repo.find();
  }

  async findById(id: number): Promise<Ticket | null> {
    // let ticket = await this.repo.findOne({ id });
    // return ticket;
    return Promise.resolve(null);
  }
}
