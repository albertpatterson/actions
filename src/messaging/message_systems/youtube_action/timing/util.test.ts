import { pause } from './util';
import 'regenerator-runtime/runtime';

describe('pause', () => {
  it('pauses for the expected amount of time', (done) => {
    jest.useFakeTimers();

    const startTime = Date.now();
    const pauseTime = 4000;

    (async () => {
      await pause(pauseTime);
      const ellapsedTime = Date.now() - startTime;
      expect(ellapsedTime).toBeGreaterThanOrEqual(pauseTime);
      expect(ellapsedTime).toBeLessThan(1.1 * pauseTime);
      done();
    })();

    jest.runAllTimers();
  });
});
