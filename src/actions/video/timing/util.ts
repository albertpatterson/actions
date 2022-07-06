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

export function pause(waitTime: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(() => {
      console.log('pause done');
      res();
    }, waitTime);
  });
}

export function pauseRand(min: number, max: number) {
  const wait = min + Math.floor(Math.random() * (max - min + 1));
  return pause(wait);
}

export async function poll(
  checkIfComplete: () => boolean,
  max = 5e3,
  rate = 500
) {
  let waitedTime = 0;

  while (true) {
    if (checkIfComplete()) {
      return true;
    }

    waitedTime += rate;

    if (waitedTime >= max) {
      return false;
    }

    await pause(rate);
  }
}

export function runRandInterval(fcn: () => void, min: number, max: number) {
  let done = false;
  const stop = () => {
    done = true;
  };

  (async () => {
    while (!done) {
      fcn();

      const wait = min + Math.floor(Math.random() * (max - min + 1));
      await pause(wait);
    }
  })();

  return stop;
}

export function setRandTimeout(fcn: () => void, min: number, max: number) {
  const wait = min + Math.floor(Math.random() * (max - min + 1));

  return setTimeout(fcn, wait);
}
