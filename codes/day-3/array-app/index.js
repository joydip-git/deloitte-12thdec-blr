var numbers = [1, 2, 4, 5, 3, 7, 0, 8, 6, 9]

/*
numbers
    .sort(
        function (a, b) {
            return a - b
        }
    ).filter(
        function (num) {
            return num % 2 === 0
        }
    )
    .map(
        function (num) {
            return num * 5
        }
    )
*/
numbers.sort(
    function (a, b) {
        return a - b
    }
)
console.log(numbers)

var transformedArray = numbers.map(
    function (val) {
        return val * 5
    }
)
console.log(transformedArray)

var evenNumbers = numbers.filter(
    function (val) {
        return val % 2 === 0
    }
)
console.log(evenNumbers)

var foundIndex = numbers.findIndex(
    function (num) {
        return num === 5
    }
)
console.log(foundIndex)

var foundValue = numbers.find(
    function (num) {
        return num === 4
    }
)
console.log(foundValue)

var anilEmployee = {
    name: 'Anil',
    id: 2,
    salary: 3000
}
var sunilEmployee = {
    name: 'Sunil',
    id: 1,
    salary: 2000
}
var joyEmployee = {
    name: 'Joydip',
    id: 3,
    salary: 1000
}
var employees = [anilEmployee, sunilEmployee, joyEmployee]
var filteredEmployeeNames = employees
    .sort(
        function (e1, e2) {
            //return e1.id-e2.id
            //return e1.name.localeCompare(e2.name)
            return e1.salary - e2.salary
        }
    )
    .filter(
        function (e) {
            return e.salary > 2000
        }
    )
    .map(
        function (e) {
            return e.name
        }
    )
console.log(employees)
console.log(filteredEmployeeNames)

