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

export class Context {
  private vidSpeedInterval: number | null = null;

  hasVidSpeedInterval() {
    return this.vidSpeedInterval !== null;
  }

  clearVidSpeedInterval() {
    if (this.vidSpeedInterval) {
      window.clearInterval(this.vidSpeedInterval);
      this.vidSpeedInterval = null;
    }
  }

  setVidSpeedInterval(fcn: () => void, interval: number) {
    this.clearVidSpeedInterval();
    this.vidSpeedInterval = window.setInterval(fcn, interval);
  }

  private vidSkipInterval: number | null = null;

  hasVidSkipInterval() {
    return this.vidSkipInterval !== null;
  }

  clearVidSkipInterval() {
    if (this.vidSkipInterval) {
      window.clearInterval(this.vidSkipInterval);
      this.vidSkipInterval = null;
    }
  }

  setVidSkipInterval(fcn: () => void, interval: number) {
    this.clearVidSkipInterval();
    this.vidSkipInterval = window.setInterval(fcn, interval);
  }
}

export const context = new Context();
