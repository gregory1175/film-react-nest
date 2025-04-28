import { LoggerService, Injectable, LogLevel } from '@nestjs/common';

@Injectable()
export class JsonLogger implements LoggerService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  warn(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  debug?(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verbose?(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fatal?(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLogLevels?(levels: LogLevel[]) {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formatMessage(level: string, message: any, ...optionalParams: any[]) {
    return JSON.stringify({ level, message, optionalParams });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  log(message: any, ...optionalParams: any[]) {
    console.log(this.formatMessage('log', message, optionalParams));
  }
}
