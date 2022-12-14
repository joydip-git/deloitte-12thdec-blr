function showMenu() {
    window.alert('1. add \n 2. subtract \n 3. multiply \n 4. divide')
}
function getChoice() {
    var strChoice = window.prompt('enter choice: ', 1)
    return Number(strChoice)
}
function getValue() {
    var strValue = window.prompt('enter value: ', 0)
    return Number(strValue)
}

function invokeOperation(choice, firstValue, secondValue) {
    var result
    switch (choice) {
        case 1:
            result = add(firstValue, secondValue)
            break;
        case 2:
            result = subtract(firstValue, secondValue)
            break;

        case 3:
            result = multiply(firstValue, secondValue)
            break;

        case 4:
            result = divide(firstValue, secondValue)
            break;

        default:
            window.alert('enter proper choice')
            break;
    }
    return result
}

function getDecision() {
    var strDecision = window.prompt('Terminate?[n/N]: ', 'y')
    return strDecision
}