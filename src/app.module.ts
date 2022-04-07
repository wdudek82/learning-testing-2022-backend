import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Ticket } from './tickets/entities/ticket.entity';
import { Comment } from './tickets/entities/comment.entity';
import { MessagesModule } from './messages/messages.module';

const postgresConnection = {
  type: 'postgres',
  host: process.env.HOST || 'localhost',
  port: 5432,
  username: process.env.USER || 'learntesting',
  password: process.env.PASSWORD || 'learntesting',
  database: process.env.DATABASE || 'learntesting',
  synchronize: true,
  logging: false,
  entities: [User, Ticket, Comment],
  subscribers: [],
  migrations: [],
};

if (process.env.SSL_ENABLED) {
  const dbSslConfig = {
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  };
  Object.assign(postgresConnection, dbSslConfig);
}

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
