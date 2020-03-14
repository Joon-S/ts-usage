function plunck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n])
}

interface Person {
    name: string
    age: number
}

let person: Person = {
    name: 'Jarid',
    age: 36
}

// 해당 함수 인자에 퍼슨 인터페이스에 없는게 들어가면 빠꾸
let strings: string[] = plunck(person, ['name'])
console.log(strings)
