interface SearchFunc {
    (source: string, subString: string): boolean
}

// 인자값을 똑같이 적어도 되고 이름을 바꿔도 되고~
let mySearch: SearchFunc
mySearch = function(src: string, sub: string) {
    let result = src.search(sub)
    return result > -1
}

