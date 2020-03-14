interface Square {
    kind: "square",
    size: number
}
interface Rectangle {
    kind: "rectangle"
    width: number
    height: number
}
interface Circle {
    kind: "circle"
    radius: number
}

// 만약 새로운 인터페이스를 넣을경우 switch case 에도 똑같이 업데이트해줘야한다 안해주면 오류
// 그래서 2가지 방법이 있는데 반환값에 :number 명시해주던가 never fmf 쓰다던지
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size
        case "rectangle": return s.height * s.width
        case "circle": return  Math.PI * s.radius ** 2
    }
}
