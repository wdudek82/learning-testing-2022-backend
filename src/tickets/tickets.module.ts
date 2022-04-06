import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.entity';
import { Comment } from './comments/comment.entity';
import { CommentsService } from './comments/comments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Comment])],
  controllers: [TicketsController],
  providers: [TicketsService, CommentsService],
})
export class TicketsModule {}
