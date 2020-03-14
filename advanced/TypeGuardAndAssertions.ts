// 일반적으로 이렇게 작성해왔당
function f(sn: string | null): string {
    if (sn == null) {
        return "default"
    }
    else {
        return sn
    }
}
// 하지만 이렇게 사용가능하다
function f1(sn: string | null): string {
    return sn || "default"
}


// name 부분이 널일수가 있어서 오류가 난다
function broken(name: string | null): string {
    function postfix(epithet: string) {
        return name.charAt(0) + ', the ' + epithet
    }
    name = name || "Bob"
    return postfix("great")
}
// 그래서 아래와 같이 name! 느낌표를 적어준다
function broken2(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + ', the ' + epithet
    }
    name = name || "Bob"
    return postfix("great")
}
