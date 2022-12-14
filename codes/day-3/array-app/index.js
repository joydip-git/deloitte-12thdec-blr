function filterValues(arr, callbackFn) {
    var filteredArray = []
    for (var index = 0; index < arr.length; index++) {
        var value = arr[index]
        var isTrue = callbackFn(value)
        if (isTrue) {
            filteredArray.push(value)
        }
    }
    return filteredArray
}

var numbers = [1, 2, 4, 5, 3, 7, 0, 8, 6, 9]

//filter all the even numbers
var isEvenNumber = function (element) {
    if (element % 2 === 0)
        return true
    else
        return false
}
var evenNumbers = filterValues(numbers, isEvenNumber)
console.log(evenNumbers)

//filter all the odd numbers
var isOddNumber = function (num) {
    return num % 2 !== 0 ? true : false
}
var oddNumbers = filterValues(numbers, isOddNumber)
console.log(oddNumbers)

//filter all the numbers>5
var isGreaterThanFive = function (num) {
    return num > 5
}
var greaterNumbers = filterValues(numbers, isGreaterThanFive)
console.log(greaterNumbers)

/*
function getMarker(noOfMarkers) {
    return 'marker :' + noOfMarkers
}
function getAttendanceSheet(noOfCopies) {
    return 'attendance sheet ' + noOfCopies
}

function assistTrainer(functionToCall) {
    return functionToCall(2)
}

var markerObj = assistTrainer(getMarker)
var sheetObj = assistTrainer(getAttendanceSheet)
*/
function callWhenButonClicked() {
    window.alert('clicked')
}
