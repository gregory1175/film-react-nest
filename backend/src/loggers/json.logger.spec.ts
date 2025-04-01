import { JsonLogger } from './json.logger';

describe('JsonLogger', () => {
  let logger: JsonLogger;

  beforeEach(() => {
    logger = new JsonLogger();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should format message correctly', () => {
    const formatted = logger.formatMessage('log', 'Test message', {
      data: 123,
    });
    expect(formatted).toBe(
      JSON.stringify({
        level: 'log',
        message: 'Test message',
        optionalParams: [{ data: 123 }],
      }),
    );
  });

  test('should call console.log with formatted message', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    logger.log('Test message', { data: 123 });

    expect(spy).toHaveBeenCalledWith(
      JSON.stringify({
        level: 'log',
        message: 'Test message',
        optionalParams: [{ data: 123 }],
      }),
    );
  });

  test('should throw error for unimplemented methods', () => {
    expect(() => logger.error('Error message')).toThrow(
      'Method not implemented.',
    );
    expect(() => logger.warn('Warning message')).toThrow(
      'Method not implemented.',
    );
    expect(() => logger.debug?.('Debug message')).toThrow(
      'Method not implemented.',
    );
  });
});
