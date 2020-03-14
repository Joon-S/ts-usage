interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSapces: number) {
    }
    getPaddingString(): string {
        return Array(this.numSapces + 1).join(" ")
    }
}

class StringPadder implements Padder {
    constructor(private value: string) {
    }
    getPaddingString(): string {
        return this.value
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder(" ")
}

let padder: Padder = getRandomPadder()

if(padder instanceof SpaceRepeatingPadder) {
    console.log("SpaceReapeatingPadder ~~")
}

if(padder instanceof StringPadder) {
    console.log("StringPadder ~~~")
}
