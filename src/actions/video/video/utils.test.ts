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

import {
  decrementTime,
  getVideos,
  incrementTime,
  setSpeeds,
  skip,
} from './utils';

import { context } from '../context';

describe('getVideos', () => {
  const querySelectorAllSpy = jest.spyOn(document, 'querySelectorAll');

  test('gets videos', () => {
    const mockVideos = [{}, {}] as {} as NodeListOf<Element>;
    querySelectorAllSpy.mockReturnValue(mockVideos);
    const videos = getVideos();
    expect(videos).toEqual(mockVideos);
    expect(querySelectorAllSpy).toHaveBeenCalledWith('video');
  });
});

describe('setSpeeds', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setInterval');

  beforeEach(() => {
    context.clearVidSkipInterval();
    context.clearVidSpeedInterval();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('sets the speed of the videos', () => {
    let playbackRate = 2;

    const mockVideo = {
      set playbackRate(playbackRate) {},
      get playbackRate() {
        return playbackRate;
      },
    } as HTMLVideoElement;
    const setSpy = jest.spyOn(mockVideo, 'playbackRate', 'set');

    const speed = 2.1234;
    setSpeeds(context, speed, [mockVideo]);

    expect(setSpy).toHaveBeenCalledWith(speed);
  });

  it('iteratively sets the speed of the videos', () => {
    let playbackRate = 2;

    const mockVideo = {
      set playbackRate(playbackRate) {},
      get playbackRate() {
        return playbackRate;
      },
    } as HTMLVideoElement;
    const setSpy = jest.spyOn(mockVideo, 'playbackRate', 'set');

    const speed = 2.1234;
    setSpeeds(context, speed, [mockVideo]);

    expect(setSpy).toHaveBeenNthCalledWith(1, speed);

    jest.runOnlyPendingTimers();

    expect(setSpy).toHaveBeenNthCalledWith(2, speed);

    jest.runOnlyPendingTimers();

    expect(setSpy).toHaveBeenNthCalledWith(3, speed);
  });
});

describe('skip', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setInterval');

  beforeEach(() => {
    context.clearVidSkipInterval();
    context.clearVidSpeedInterval();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('iteratively sets the time of the videos', () => {
    let currentTime = 20;

    const mockVideo = {
      set currentTime(inputCurrentTime) {
        currentTime = inputCurrentTime;
      },
      get currentTime() {
        return currentTime;
      },
    } as HTMLVideoElement;
    const setSpy = jest.spyOn(mockVideo, 'currentTime', 'set');

    expect(context.hasVidSkipInterval()).toBe(false);
    skip(context, 10, [mockVideo]);

    expect(currentTime).toBe(30);
    expect(setSpy).toHaveBeenNthCalledWith(1, 30);
    expect(context.hasVidSkipInterval()).toBe(true);

    jest.runOnlyPendingTimers();

    expect(setSpy).toHaveBeenNthCalledWith(2, 40);
    expect(currentTime).toBe(40);

    jest.runOnlyPendingTimers();

    expect(setSpy).toHaveBeenNthCalledWith(3, 50);
    expect(currentTime).toBe(50);
  });
});

describe('incrementTime', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setInterval');

  beforeEach(() => {
    context.clearVidSkipInterval();
    context.clearVidSpeedInterval();
    jest.clearAllMocks();
  });

  it('increments the video time', () => {
    let currentTime = 40;

    const mockVideo = {
      set currentTime(inputCurrentTime) {
        currentTime = inputCurrentTime;
      },
      get currentTime() {
        return currentTime;
      },
    } as HTMLVideoElement;
    const setSpy = jest.spyOn(mockVideo, 'currentTime', 'set');

    incrementTime(context, 5, [mockVideo]);

    expect(currentTime).toBe(45);
    expect(setSpy).toHaveBeenCalledWith(45);
  });
});

describe('decremenetTime', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setInterval');

  beforeEach(() => {
    context.clearVidSkipInterval();
    context.clearVidSpeedInterval();
    jest.clearAllMocks();
  });

  it('decrements the video time', () => {
    let currentTime = 40;

    const mockVideo = {
      set currentTime(inputCurrentTime) {
        currentTime = inputCurrentTime;
      },
      get currentTime() {
        return currentTime;
      },
    } as HTMLVideoElement;
    const setSpy = jest.spyOn(mockVideo, 'currentTime', 'set');

    decrementTime(context, 15, [mockVideo]);

    expect(currentTime).toBe(25);
    expect(setSpy).toHaveBeenCalledWith(25);
  });

  it('decrements the video time and resets the speed and skip', () => {
    let currentTime = 40;
    let playbackRate = 3;

    const mockVideo = {
      set currentTime(inputCurrentTime) {
        currentTime = inputCurrentTime;
      },
      get currentTime() {
        return currentTime;
      },
      set playbackRate(inputPlaybackRate) {
        playbackRate = inputPlaybackRate;
      },
      get playbackRate() {
        return playbackRate;
      },
    } as HTMLVideoElement;
    const setSpy = jest.spyOn(mockVideo, 'currentTime', 'set');
    const clearSkipIntervalSpy = jest.spyOn(context, 'clearVidSkipInterval');

    context.clearVidSpeedInterval();
    expect(context.hasVidSpeedInterval()).toBe(false);
    decrementTime(context, 15, [mockVideo], true);

    expect(currentTime).toBe(25);
    expect(setSpy).toHaveBeenCalledWith(25);
    expect(clearSkipIntervalSpy).toHaveBeenCalled();
    expect(context.hasVidSkipInterval()).toBe(false);
    expect(playbackRate).toBe(1);
    expect(currentTime).toBe(25);
    expect(context.hasVidSpeedInterval()).toBe(true);
  });
});
