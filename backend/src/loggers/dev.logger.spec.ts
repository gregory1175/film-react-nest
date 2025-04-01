import { DevLogger } from './dev.logger';

describe('DevLogger', () => {
  let logger: DevLogger;

  beforeEach(() => {
    logger = new DevLogger();
    jest.spyOn(console, 'log').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'debug').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Должен логировать сообщение с log', () => {
    logger.log('Test log message');
    expect(console.log).toHaveBeenCalledWith('Test log message');
  });

  it('должен логировать ошибку', () => {
    logger.error('Test error message');
    expect(console.error).toHaveBeenCalledWith('Test error message');
  });

  it('должен логировать предупреждение', () => {
    logger.warn('Test warn message');
    expect(console.warn).toHaveBeenCalledWith('Test warn message');
  });

  it('должен логировать debug-сообщение', () => {
    logger.debug?.('Test debug message');
    expect(console.debug).toHaveBeenCalledWith('Test debug message');
  });
});
