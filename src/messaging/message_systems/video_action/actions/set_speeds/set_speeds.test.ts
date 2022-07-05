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

import { getVideos, setSpeeds as setSpeedsUtil } from '../../video/utils';
import { setSpeeds } from './set_speeds';
import { context } from '../../context';

jest.mock('../../video/utils');
const getVideosMock = getVideos as jest.MockedFunction<typeof getVideos>;

describe('setSpeeds', () => {
  it('sets the speed to 1', () => {
    const mockVideos = [{}, {}] as HTMLVideoElement[];
    getVideosMock.mockImplementation(() => mockVideos);
    setSpeeds(context, 1);
    expect(setSpeedsUtil).toBeCalledWith(context, 1, mockVideos);
  });

  it('sets the speed to 3', () => {
    const mockVideos = [{}, {}] as HTMLVideoElement[];
    getVideosMock.mockImplementation(() => mockVideos);
    setSpeeds(context, 3);
    expect(setSpeedsUtil).toBeCalledWith(context, 3, mockVideos);
  });

  it('sets the speed to 4', () => {
    const mockVideos = [{}, {}] as HTMLVideoElement[];
    getVideosMock.mockImplementation(() => mockVideos);
    setSpeeds(context, 4);
    expect(setSpeedsUtil).toBeCalledWith(context, 4, mockVideos);
  });
});
