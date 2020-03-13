interface Empty<T> {
}
let x: Empty<number>
let y: Empty<string>
x = y // 구조가 일치하기에 가능 다만....


interface NotEmpty<T> {
    data: T
}
let xx: NotEmpty<number>
let yy: NotEmpty<string>
x = y // 이건 오류를 뱉는다 왜냐 data 타입이 애초에 달라


