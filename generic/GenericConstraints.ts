interface Lengthwise {
    length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
}

// 대신에 무조건 length 라는 프로퍼티가 필요
loggingIdentity({length: 10, value: 3})

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4}
getProperty(x, "a")
// getProperty(x, "m") x 문자열에 m 이라는 키가 없기때문에 오류를 뱉는다
