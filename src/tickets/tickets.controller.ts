import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
  @Get()
  getTickets(): any[] {
    return [];
  }

  @Get('/:id')
  getTicket(@Param('id') ticketId: number): any {
    console.log(`get ticket by id: ${ticketId}`);
    return null;
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
  deleteTicket(@Param('id') ticketId: number): void {
    console.log(`Delete a ticket by id: ${ticketId}`);
  }
}
