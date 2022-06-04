import { getVideos, setSpeeds } from '../../video/utils';
import { slowDown } from './slow_down';
import { context } from '../../context';

jest.mock('../../video/utils');
const getVideosMock = getVideos as jest.MockedFunction<typeof getVideos>;

it('reduces playback rate by .5', () => {
  let playbackRate = 2;

  const mockVideo = {
    set playbackRate(playbackRate) {},
    get playbackRate() {
      return playbackRate;
    },
  } as HTMLVideoElement;

  getVideosMock.mockImplementation(() => [mockVideo]);

  slowDown();
  expect(setSpeeds).toBeCalledWith(context, 1.5, [mockVideo]);
  playbackRate = 1.5;

  slowDown();
  expect(setSpeeds).toBeCalledWith(context, 1, [mockVideo]);
});
