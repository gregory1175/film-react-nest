import { JsonLogger } from './json.logger';

describe('JsonLogger', () => {
  let log: jest.SpyInstance<
    void,
    [message?: any, ...optionalParams: any[]],
    any
  >;
  const jsonLogger = new JsonLogger();

  beforeEach(() => {
    log = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    log.mockReset();
  });

  it('should log correct format', () => {
    jsonLogger.warn('hi', { a: 'abc', c: 123 });
    expect(log).toBeCalledTimes(1);
    expect(log).toBeCalledWith(expect.stringContaining('"level":"warn"'));
  });
});
