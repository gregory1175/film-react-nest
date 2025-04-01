import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { TskvLogger } from './loggers/tskv.logger';
import { DevLogger } from './loggers/dev.logger';
import { JsonLogger } from './loggers/json.logger';

const massLoggers = {
  TskvLogger,
  DevLogger,
  JsonLogger,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.setGlobalPrefix('api/afisha');
  app.enableCors();
  const selectedLogger = process.env.LOGGER || 'JsonLogger';
  const LoggerClass = massLoggers[selectedLogger];
  if (!LoggerClass) {
    console.error(
      `Logger ${selectedLogger} not found, falling back to default (JsonLogger)`,
    );
    app.useLogger(new JsonLogger());
  } else {
    app.useLogger(new LoggerClass());
  }

  await app.listen(3000);
}
bootstrap();
