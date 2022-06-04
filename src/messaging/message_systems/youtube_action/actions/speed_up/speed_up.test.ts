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
