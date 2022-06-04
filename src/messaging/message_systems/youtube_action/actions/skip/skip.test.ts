import { skip as skipUtil } from '../../video/utils';
import { skip } from './skip';
import { context } from '../../context';

jest.mock('../../video/utils');
jest.useFakeTimers();
jest.spyOn(global, 'setInterval');

describe('skipLoop', () => {
  beforeEach(() => {
    context.clearVidSkipInterval();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('begins skipping if not currently skipping', () => {
    expect(context.hasVidSkipInterval()).toBe(false);
    skip();
    expect(skipUtil).toHaveBeenCalledWith(context, 10);
  });

  it('begins skipping if not currently skipping', () => {
    const clearSkipIntervalSpy = jest.spyOn(context, 'clearVidSkipInterval');
    context.setVidSkipInterval(() => {}, 123);
    skip();
    expect(skipUtil).not.toHaveBeenCalled();
    expect(clearSkipIntervalSpy).toHaveBeenCalled();
  });
});
