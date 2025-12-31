import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as qs from 'qs';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.enableCors();

  (app.getHttpAdapter().getInstance() as express.Express).set(
    'query parser',
    (str: string): qs.ParsedQs => qs.parse(str),
  );

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
