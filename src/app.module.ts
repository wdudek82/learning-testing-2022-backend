import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { User } from './users/entities/user.entity';
import { Ticket } from './tickets/entities/ticket.entity';
import { Comment } from './tickets/entities/comment.entity';

const sqliteConnection = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [User, Ticket],
  migrations: [],
  synchronize: true,
};

const postgresConnection = {
  type: 'postgres',
  host: process.env.HOST || 'localhost',
  port: 5432,
  username: process.env.USER || 'learntesting',
  password: process.env.PASSWORD || 'learntesting',
  database: process.env.DATABASE || 'learntesting',
  synchronize: process.env.SYNCHRONIZE || true,
  logging: false,
  entities: [User, Ticket, Comment],
  subscribers: [],
  migrations: [],
};

@Module({
  imports: [
    TypeOrmModule.forRoot(postgresConnection),
    TicketsModule,
    UsersModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
