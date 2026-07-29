import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';

async function bootstrap(): Promise<void> {
  const { port, corsOrigins, apiPrefix } = appConfig();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(apiPrefix);
  app.enableCors({ origin: [...corsOrigins] });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(port, '0.0.0.0');
}

void bootstrap();
