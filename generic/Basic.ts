function identity<T>(arg: T): T {
    return arg
}

console.log(identity<string>("myString"))
console.log(identity("myString"))

function lpoggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length)
    return arg
}

let myIdentity: <U>(arg: U) => U = identity
let myIdentity2: {<T>(arg: T): T} = identity

interface GenericIdentityFn {
    <T>(arg: T): T
}

let myIdentity3: GenericIdentityFn = identity

interface GenericIdentityFn2<T> {
    (arg: T): T
}

let myIdentity4: GenericIdentityFn2<number> = identity
