// 매개변수일때
let x = (a: number) => 0
let y = (b: number, s: string) => 0
//y = x; 좋아요
//x = y; 오류


// 반환타입일때
let a = () => ({name: "Alice"})
let b = () => ({name: "Alice", location: "Seattle"})
//a = b 좋아요
//b = a 오류

// 두개의 케이스는 정반대이므로 잘알아둘것...;
