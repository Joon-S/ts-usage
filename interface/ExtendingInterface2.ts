class Control {
    private state: any
}

interface SelectTableControl extends Control {
    select(): void
}

class Button extends Control implements SelectTableControl {
    select() {}
}

class TextBox extends Control {
    select() {}
}

// 여기부터는 오류
// 위에꺼는 Control 를 직접 상속했기때문에 프라이빗도 가져오지만 인터페이스를 통해 가져오게 될경우 모르게 됨
// class Imakjge implements SelectTableControl {
//     select() {}
// }

// class Location {}