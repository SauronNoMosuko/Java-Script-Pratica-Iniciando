let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const div = firstNumber / secondNumber
const mult = firstNumber * secondNumber
const rest = firstNumber % secondNumber

alert ('Soma: ' + sum)
alert ('Subtração: ' + sub)
alert ('Divisão: ' + div)
alert ('Multiplicação: ' + mult)
alert ('Resto da divisão: ' + rest)
