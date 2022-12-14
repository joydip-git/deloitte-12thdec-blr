function main() {
    var toContinue = 'n'
    do {
        showMenu()
        var operationChoice = getChoice()
        var firstNumber = getValue()
        var secondNumber = getValue()
        var operationResult = invokeOperation(operationChoice, firstNumber, secondNumber)
        window.alert('Result is: ' + operationResult)

        toContinue = getDecision()

    } while (toContinue !== 'n' || toContinue !== 'N')
}
main()