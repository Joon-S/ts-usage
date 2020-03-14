// 인자를 any 로 쓸경우 예를들어 불값이 들어갔을때 컴파일 타임에서는 통과하지만 런타임에서는 빠꾸됨...
// 그래서 좋은 방법은 바로 유니언!! 해답은 padding: string | number 이다.
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value
    }
    if (typeof padding === "string") {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}

const foo = padLeft("Hello world", 4)
console.log(foo)



interface Bird {
    fly()
    layEggs()
}

interface Fish {
    swim()
    layEggs()
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet()
pet.layEggs()
pet.swim() // 공통된 부분만 사용가능 대신에 다른 방법도 있다
(<Fish>pet).swim() // 타입을 명시적으로 써주면 또 됨...



// return 값 명시도 가능함...
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined
}
// 그래서 아래처럼 사용가능
if(isFish(pet)) {
    pet.swim()
}
