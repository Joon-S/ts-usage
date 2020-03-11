class Greeters {
    static standardGreeting = "Hello, there"
    greeting: string
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting
        } else {
            return Greeters.standardGreeting
        }
    }
}

let greeter1: Greeters = new Greeters()
console.log(greeter1.greet())

let greeterMaker: typeof Greeters = Greeters
greeterMaker.standardGreeting = "Hey there!"

let greeter2: Greeters = new greeterMaker()
console.log(greeter2.greet())