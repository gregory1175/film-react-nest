import { TskvLogger } from './tskv.logger';

describe('TskvLogger', () => {
  let logger: TskvLogger;

  beforeEach(() => {
    logger = new TskvLogger();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should format message correctly', () => {
    const formatted = logger['formatMessage']('log', 'Test message', {
      data: 123,
    });
    expect(formatted).toBe(
      `level=log\tmessage=Test message\tparams=[{"data":123}]\n`,
    );
  });

  test('should call console.log with formatted message', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    logger.log('Test message', { data: 123 });

    expect(spy).toHaveBeenCalledWith(
      `level=log\tmessage=Test message\tparams=[{"data":123}]\n`,
    );
  });

  test('should call console.error with formatted message', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();
    logger.error('Error message', { data: 404 });

    expect(spy).toHaveBeenCalledWith(
      `level=error\tmessage=Error message\tparams=[{"data":404}]\n`,
    );
  });

  test('should call console.warn with formatted message', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation();
    logger.warn('Warning message', { data: 'warning' });

    expect(spy).toHaveBeenCalledWith(
      `level=warn\tmessage=Warning message\tparams=[{"data":"warning"}]\n`,
    );
  });

  test('should call console.debug with formatted message', () => {
    const spy = jest.spyOn(console, 'debug').mockImplementation();
    logger.debug?.('Debug message', { data: 'debug' });

    expect(spy).toHaveBeenCalledWith(
      `level=debug\tmessage=Debug message\tparams=[{"data":"debug"}]\n`,
    );
  });

  test('should call console.info with formatted message', () => {
    const spy = jest.spyOn(console, 'info').mockImplementation();
    logger.verbose?.('Verbose message', { data: 'info' });

    expect(spy).toHaveBeenCalledWith(
      `level=verbose\tmessage=Verbose message\tparams=[{"data":"info"}]\n`,
    );
  });
});
