import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Learning Testing 2022')
    .setDescription('Jeera bugtracker app')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
async function bootstrap() {
  const isProd = process.env.NODE_ENV === 'prod';

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: ['http://localhost:4200', 'https://wdudek82.github.io'],
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });
  app.set('trust proxy', 1);
  app.use(
    cookieSession({
      keys: ['key1'],
      sameSite: isProd ? 'none' : 'lax',
      secure: isProd,
    }),
  );
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
    }),
  );
  setupSwagger(app);
  await app.listen(process.env.PORT || 8080);
}

bootstrap();
