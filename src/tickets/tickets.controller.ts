import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.entity';
import { Comment } from './comments/comment.entity';
import { CommentsService } from './comments/comments.service';

@Controller('tickets')
export class TicketsController {
  constructor(
    private ticketsService: TicketsService,
    private commentsService: CommentsService,
  ) {}

  @Get()
  getTickets(@Query('title') title: string): Promise<Ticket[]> {
    return this.ticketsService.findAll(title);
  }

  @Get('/:id')
  getTicket(@Param('id') id: string): any {
    return this.ticketsService.findById(+id);
  }

  @Post()
  createTicket(@Body() body: any): Promise<Ticket> {
    const {
      title,
      description,
      authorId,
      assigneeId,
      priority,
      status,
      relatedTicketId,
    } = body;
    return this.ticketsService.create(
      title,
      description,
      authorId,
      assigneeId,
      priority,
      status,
      relatedTicketId,
    );
  }

  @Put('/:id')
  updateTicket(@Body() body: any, @Param('id') id: string): Promise<Ticket> {
    return this.ticketsService.update(+id, body);
  }

  @Delete('/:id')
  softDeleteTicket(@Param('id') id: string): Promise<Ticket> {
    return this.ticketsService.softDelete(+id);
  }

  @Post('/:ticketId/comments')
  addComment(
    @Body() body: any,
    @Param('ticketId') ticketId: string,
  ): Promise<any> {
    const { content, authorId } = body;

    // TODO: Add better error handling for incorrect FKs:
    //  authorId, ticketId (its just HTTP 500 right now).
    return this.commentsService.create(content, authorId, +ticketId);
  }

  @Put('/:ticketId/comments/:commentId')
  updateTicketComment(
    @Body() body: any,
    @Param('commentId') commentId: string,
  ): Promise<Comment> {
    return this.commentsService.update(+commentId, body);
  }

  @Delete('/:ticketId/comments/:commentId')
  softDeleteTicketComment(
    @Param('commentId') commentId: string,
  ): Promise<Comment> {
    return this.commentsService.softDelete(+commentId);
  }
}
