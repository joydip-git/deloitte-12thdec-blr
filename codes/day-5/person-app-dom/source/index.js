function loadDepartments() {
    const selectObj = document.getElementById('selectDept')
    departments
        .forEach(
            function (d) {
                var optionObj = document.createElement('option')
                optionObj.value = d.id
                optionObj.text = d.name
                selectObj.appendChild(optionObj)
            }
        )
}
function loadDataInTable() {
    const tblObj = document.getElementById('tblEmployees')
    const tblBodyObj = document.getElementById('tblBody')

    const records = sessionStorage.getItem('employeerecords')
    let jsArray = []

    let isDataPresent = false
    if (records) {
        //Converts a JavaScript Object Notation (JSON) string into an object.
        jsArray = JSON.parse(records)
        if (jsArray.length !== 0)
            isDataPresent = true
    }
    if (!isDataPresent) {
        tblObj.hidden = true
    } else {
        tblObj.hidden = false
        tblBodyObj.innerHTML = ''
        jsArray.forEach(
            function (e) {
                const eRow = document.createElement('tr')
                const eIdColumn = createColumn(e.id.toString())
                const eNameColumn = createColumn(e.name)
                const eSalaryColumn = createColumn(e.salary.toString())
                const eDeptColumn = createColumn(e.departmentName)
                eRow.append(eIdColumn, eNameColumn, eSalaryColumn, eDeptColumn)
                tblBodyObj.appendChild(eRow)
            }
        )
    }
}
function saveEmployee() {
    console.log('clicked')
    const nameInputElement = document.getElementById('txtName')
    const empName = nameInputElement.value

    const salaryInputElement = document.getElementById('txtSalary')
    const empSalary = Number(salaryInputElement.value)

    const selectDeptElement = document.getElementById('selectDept')
    const index = selectDeptElement.selectedIndex
    const selectedOption = selectDeptElement.options[index]
    const selectedOptionName = selectedOption.text

    let id = 1
    var employees = JSON.parse(sessionStorage.getItem('employeerecords'))
    if (employees) {
        if (employees.length > 0) {
            const lastEmployee = employees[employees.length - 1]
            id = lastEmployee.id + 1
        }
    }
    const newEmployee = new Employee(empName, id, empSalary, selectedOptionName)

    //employees.push(newEmployee)
    if (sessionStorage.getItem('employeerecords')) {
        var jsArray = JSON.parse(
            sessionStorage.getItem('employeerecords')
        )
        jsArray.push(newEmployee)
        sessionStorage.setItem('employeerecords', JSON.stringify(jsArray))
    } else {
        sessionStorage.setItem(
            'employeerecords',
            JSON.stringify([newEmployee])
        )
    }
    loadDataInTable()
}
function createColumn(value) {
    const column = document.createElement('td')
    column.innerText = value
    return column
}

window.addEventListener(
    'DOMContentLoaded',
    function () {
        loadDepartments()
        this.document.getElementById('btnAdd')
            .addEventListener(
                'click',
                saveEmployee
            )
        loadDataInTable()
    }
)


/*
var anilPersonObj = new Person('anil', 2, 3000)
console.log(anilPersonObj)
var sunilPersonObj = new Person('sunil', 1, 2000)
var joyPersonObj = new Person('joydip', 3, 1000)

anilPersonObj.name = 'Anil Kumar'
console.log(anilPersonObj.name)
var people = [anilPersonObj, sunilPersonObj, joyPersonObj]

people
    .sort(
        function (p1, p2) {
            return p1.id - p2.id
        }
    )
    .filter(
        function (p) {
            return p.salary > 2000
        }
    )
    .map(
        function (p) {
            return p.name
        }
    )
    .forEach(
        function (pName) {
            console.log(pName)
        }
    )

    */