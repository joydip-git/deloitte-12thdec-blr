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

function transformValues(arr, callbackFn) {
    var transformedArray = []
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index]
        var transformedValue = callbackFn(element)
        transformedArray.push(transformedValue)
    }
    return transformedArray
}

function findValueIndex(arr, callbackFn) {
    var foundIndex = -1
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i]
        var isPresent = callbackFn(element)
        if (isPresent) {
            foundIndex = i
            break;
        }
    }
    return foundIndex
}

function sortValues(arr, callbackFn) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {

            var comparisonValue = callbackFn(arr[i], arr[j])
            if (comparisonValue > 0) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
var numbers = [1, 2, 4, 5, 3, 7, 0, 8, 6, 9]

sortValues(numbers,
    function (a, b) {
        return a - b
    }
)
console.log(numbers)
var indexValue = findValueIndex(
    numbers,
    function (num) {
        return num === 5
    }
)
console.log(indexValue)
// var multiplyByFive = function (val) {
//     return val * 5
// }
// transformValues(
//     numbers,
//     multiplyByFive
// )
var transformedResult = transformValues(numbers, function (val) { return 'Value: ' + (val * 5) })
console.log(transformedResult)

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
