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
