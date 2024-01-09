class Clock {
  private _template: string;
  private _timer?: number;

  constructor({ template }: { template: string }) {
    this._template = template;
  }

  private _render(): void {
    let date = new Date();

    let hours: string | number = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins: string | number = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs: string | number = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this._template
      .replace("h", hours.toString())
      .replace("m", mins.toString())
      .replace("s", secs.toString());

    console.log(output);
  }

  stop(): void {
    if (this._timer !== undefined) {
      clearInterval(this._timer);
    }
  }

  start(): void {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }
}

// テスト
function testClock() {
  const originalLog = console.log;
  let logOutput = "";
  console.log = (msg: string) => {
    logOutput = msg;
  };

  const clock = new Clock({ template: "h:m:s" });
  clock.start();
  setTimeout(() => {
    clock.stop();
    if (/^\d{2}:\d{2}:\d{2}$/.test(logOutput)) {
      console.log("Test passed!"); // Test success message
    } else {
      console.error(
        `Test failed! Expected a time format but got '${logOutput}'`
      ); // Test failed message
    }
    console.log = originalLog; // restore original log function
  }, 1100);
}

testClock();
