import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
      AppModule, 
      new FastifyAdapter());
      app.useGlobalPipes(new ValidationPipe())
      const config = app.get(ConfigService)
  await app.listen(parseInt(config.get('PORT')));
}
bootstrap();
