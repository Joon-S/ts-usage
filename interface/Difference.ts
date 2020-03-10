interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface2;
  }

  interface ClockInterface2 {
    tick();
  }
  
  function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
  ): ClockInterface2 {
    return new ctor(hour, minute);
  }

class DigitalClock implements ClockInterface2 {
    constructor(h: number, m: number) {}
    tick() {
      console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface2 {]
    constructor(h: number, m: number) {}
    tick() {
      console.log("tick tock");
    }
  }
  
  let digital = createClock(DigitalClock, 12, 17);
  let analog = createClock(AnalogClock, 7, 32);