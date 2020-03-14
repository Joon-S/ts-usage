// 교차타입
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{}
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id]
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id]
        }
    }
    return result
}

class Person {
    constructor(public name: string) {
    }
}

interface Loggable {
    log(): void
}

class ConsoleLogger implements Loggable {
    log() {
        console.log("Helloooooo")
    }
}

const jim = extend(new Person("Jim"), new ConsoleLogger())
const n = jim.name
console.log(n)
jim.log()
