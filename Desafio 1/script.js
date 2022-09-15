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

if (rest == 0) {
  alert("A soma dos números digitados resultou em: " + sum + " e o valor é par")
} else {
  alert("A soma dos números digitados resultou em: " + sum + " e o valor é ímpar")
}

if (firstNumber == secondNumber) {
  alert("Os números digitados são iguais")
} else {
  alert("Os números digitados são diferentes")
}

