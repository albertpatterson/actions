/**
 * @file
 * @author Albert Patterson <albert.patterson.code@gmail.com>
 * @see [Linkedin]{@link https://www.linkedin.com/in/apattersoncmu/}
 * @see [Github]{@link https://github.com/albertpatterson}
 * @see [npm]{@link https://www.npmjs.com/~apatterson189}
 * @see [Youtube]{@link https://www.youtube.com/channel/UCrECEffgWKBMCvn5tar9bYw}
 * @see [Medium]{@link https://medium.com/@albert.patterson.code}
 *
 * Free software under the GPLv3 licence. Permissions of this strong copyleft
 * license are conditioned on making available complete source code of
 * licensed works and modifications, which include larger works using a
 * licensed work, under the same license. Copyright and license notices must
 * be preserved. Contributors provide an express grant of patent rights.
 */

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
    skip(context);
    expect(skipUtil).toHaveBeenCalledWith(context, 10);
  });

  it('begins skipping if not currently skipping', () => {
    const clearSkipIntervalSpy = jest.spyOn(context, 'clearVidSkipInterval');
    context.setVidSkipInterval(() => {}, 123);
    skip(context);
    expect(skipUtil).not.toHaveBeenCalled();
    expect(clearSkipIntervalSpy).toHaveBeenCalled();
  });
});
