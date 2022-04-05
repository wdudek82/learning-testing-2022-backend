import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.entity';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketsService: TicketsService) {}

  @Get()
  getTickets(): Promise<Ticket[]> {
    return this.ticketsService.findAll();
  }

  @Get('/:id')
  getTicket(@Param('id') id: string): any {
    console.log(`get ticket by id: ${id}`);
    return this.ticketsService.findById(+id);
  }

  @Post()
  createTicket(@Body() body: any): void {
    console.log('Create a ticket (not implemented yet): ');
  }

  @Put('/:id')
  updateTicket(@Body() body: any, @Param('id') ticketId: number): void {
    console.log(`update ticket by id: ${ticketId}`);
  }

  @Delete('/:id')
  deleteTicket(@Param('id') id: string): Promise<Ticket> {
    console.log(`Delete a ticket by id: ${id}`);
    return this.ticketsService.remove(+id);
  }
}
