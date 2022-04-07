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
  url:
    process.env.DATABASE_URL || 'jdbc:postgresql://localhost:5432/learntesting',
  // host: process.env.HOST || 'localhost',
  // port: 5432,
  // username: process.env.USER || 'learntesting',
  // password: process.env.PASSWORD || 'learntesting',
  // database: process.env.DATABASE || 'learntesting',
  synchronize: true,
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
