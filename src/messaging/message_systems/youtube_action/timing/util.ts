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
