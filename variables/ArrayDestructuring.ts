let input = [1, 2]
let [first, second] = input

console.log(first) // 1
console.log(second) // 2

// It can use upper case as well
function f([first, second]: [number, number]) {
    console.log(first)
    console.log(second)
}

let [one, ...rest] = [1,2,3,4]
console.log(one) // 1
console.log(rest) // 2,3,4

