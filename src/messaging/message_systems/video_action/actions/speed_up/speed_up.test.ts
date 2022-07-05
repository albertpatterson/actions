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

 import { getVideos, setSpeeds } from '../../video/utils';
import { speedUp } from './speed_up';
import { context } from '../../context';

jest.mock('../../video/utils');

const getVideosMock = getVideos as jest.MockedFunction<typeof getVideos>;

it('increases playback rate by .5', () => {
  let playbackRate = 2;

  const mockVideo = {
    set playbackRate(playbackRate) {},
    get playbackRate() {
      return playbackRate;
    },
  } as HTMLVideoElement;

  getVideosMock.mockImplementation(() => [mockVideo]);

  speedUp();
  expect(setSpeeds).toBeCalledWith(context, 2.5, [mockVideo]);
  playbackRate = 2.5;

  speedUp();
  expect(setSpeeds).toBeCalledWith(context, 3, [mockVideo]);
});
