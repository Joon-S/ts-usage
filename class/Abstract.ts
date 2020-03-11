abstract class Department {
    constructor(public name: string) {}

    printName(): void {
        console.log("Department name: " + this.name)
    }

    abstract printMeeting(): void
}

class AccountingDepartment extends Department {

    constructor() { super("Account and Auditing")}

    printMeeting(): void {
        console.log("Accounting Department are meeting")
    }

    generateReports(): void {
        console.log("Generate Reports from AccountDepartment")
    }
}

let depart: Department = new AccountingDepartment()
depart.printName()
depart.printMeeting()