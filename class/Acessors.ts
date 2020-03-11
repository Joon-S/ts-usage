let passcode = "secret passcode"

class Employee {
    private _fullName: string

    get fullName(): string {
        return this._fullName
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName
        } else {
            console.log("오류: employee의 무단 업데이트")
        }
    }
}

let employee = new Employee()
employee.fullName = "Bob Smith"
if (employee.fullName) {
    console.log(employee.fullName)
}