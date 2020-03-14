function f(x: number, y?: number) {
    console.log(x + (y || 0))
}

f(1, 2)
f(1)
f(1, undefined)
f(1, null)
