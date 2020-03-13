class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}

// 문자열로도 가능하다
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
    return x + y
}
