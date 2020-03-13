interface Named {
    name: string
}

let x: Named
let y = { name: "Alice", location: "Seattle" }

function greet(n: Named) {
    console.log("Hello, " + n.name)
}

greet(y) // 사실 잘됨...
