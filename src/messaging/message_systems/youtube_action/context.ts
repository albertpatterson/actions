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
