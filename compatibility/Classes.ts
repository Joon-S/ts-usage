class Animal {
    feet: number
    constructor(name: string, numFeet: number) {
    }
}

class Size {
    feet: number
    constructor(numFeet: number) {
    }
}

let a: Animal
let s: Size

a = s // 성공
s = a // 성공

// private, protected 도 마찬가지로 있어야만 타입호환이 가능함
