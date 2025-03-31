import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { TskvLogger } from './loggers/tskv.loggers';
import { DevLogger } from './loggers/dev.loggers';
import { JsonLogger } from './loggers/json.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.setGlobalPrefix('api/afisha');
  app.enableCors();
  app.useLogger(new DevLogger());
  app.useLogger(new JsonLogger());
  app.useLogger(new TskvLogger());
  await app.listen(3000);
}
bootstrap();
