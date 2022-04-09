import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Ticket } from './tickets/entities/ticket.entity';
import { Comment } from './tickets/entities/comment.entity';

const postgresConnection = {
  type: 'postgres',
  port: 5432,
  synchronize: true,
  logging: false,
  entities: [User, Ticket, Comment],
  subscribers: [],
  migrations: [],
};

const prodDbConfig = {
  url: process.env.DATABASE_URL,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

const devDbConfig = {
  host: 'localhost',
  username: 'learntesting',
  password: 'learntesting',
  database: 'learntesting',
};

if (process.env.PROD) {
  Object.assign(postgresConnection, prodDbConfig);
} else {
  Object.assign(postgresConnection, devDbConfig);
}

@Module({
  imports: [
    TypeOrmModule.forRoot(postgresConnection),
    TicketsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
