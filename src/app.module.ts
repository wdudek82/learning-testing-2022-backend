import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { User } from './users/user.entity';
import { Ticket } from './tickets/ticket.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Ticket],
      migrations: [],
      synchronize: true,
    }),
    TicketsModule,
    UsersModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
