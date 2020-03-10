interface LabelledValued {
    label: string
}

function printLabel(labelledObj: LabelledValued) {
    console.log(labelledObj.label)
}

let myObj = {size: 10, label: "Size 10 Object"}
printLabel(myObj)