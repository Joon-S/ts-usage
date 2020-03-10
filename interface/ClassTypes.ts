interface ClockInterface {
    currentTime: Date
}

// option 1
class Clock implements ClockInterface {
    currentTime: Date
    constructor(h: number, m: number) {}
}

// option 2
class Clock2 implements ClockInterface {
    currentTime: Date
    setTime(d: Date) {
        this.currentTime = d
    }
    constructor(h: number, m: number) {}
}

