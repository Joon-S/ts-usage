// 타입 얼라이어스는 말그대로 타입을 별칭으로 지정해주는건데
// 유니언이나 튜플 타입에서 사용할경우 이것을 쓰는게 좋다 다른땐 인터페이
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n
    }
    else {
        return n()
    }
}

type Container<T> = { value: T}

type Tree<T> = {
    value: T
    left: Tree<T>
    right: Tree<T>
}


let person: string | number = 0
person = "Mark"
type StringOrNumber = string | number
let another: StringOrNumber = 0
another = "Anna"


// 문자열 리터럴타입하고 숫자 리터럴타입이 존재
