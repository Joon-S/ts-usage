const enum Enum {
    A = 1,
    B = A * 2
}

let enumType = [Enum.A, Enum.B]
console.log(enumType)

// 도저히 무슨 말인지 모르겠네 컨스트도 그렇고
// declare enum EnumDeclare {
//     A = 1,
//     B,
//     C = 2
// }
//
// let enumDeclare = [EnumDeclare.A, EnumDeclare.B, EnumDeclare.C]
// console.log(enumDeclare)
