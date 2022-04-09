import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Ticket } from './tickets/entities/ticket.entity';
import { Comment } from './tickets/entities/comment.entity';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

enum NODE_ENV {
  DEV = 'dev',
  TEST = 'test',
  PROD = 'prod',
}

function getDbConfig(): any {
  const dbConfig = {
    type: 'postgres',
    port: 5432,
    synchronize: true,
    logging: false,
    entities: [User, Ticket, Comment],
    subscribers: [],
    migrations: [],
  };
  let envDbConfig: any = {
    host: 'localhost',
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
  };
  if (process.env.NODE_ENV == NODE_ENV.PROD) {
    envDbConfig = {
      url: process.env.DATABASE_URL,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    };
  }
  Object.assign(dbConfig, envDbConfig);
  return dbConfig;
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.join(`.env.${process.env.NODE_ENV}`),
    }),
    TypeOrmModule.forRoot(getDbConfig()),
    TicketsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

console.log(process.env);
