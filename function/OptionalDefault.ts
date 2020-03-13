function buildName(firstName = "Smith", lastName?: string, ...restOfName: string[]) {
    if(lastName)
        return + " " + lastName + restOfName.join(" ")
    else
        return firstName
}

let result = buildName("Bob") // print Bob
let result2 = buildName("Bob", "Adams") // print Bob, Adams
let result3 = buildName()
let result4 = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(result3)
console.log(result4)
