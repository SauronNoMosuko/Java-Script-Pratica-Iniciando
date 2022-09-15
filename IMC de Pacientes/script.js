/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC

  peso / (altura * altura) 
*/


const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

function IMC(weight, height) {                                 // Uma
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}                     
    `                                                          // só
}

// const printIMC = (patients) => {
//   return `Paciente ${patients.name} possui o IMC de: ${(patients.weight / ((patients.height/100) ** 2)).toFixed(2)}`
// }

// const printIMC = function(patients) {
//   return `Paciente ${patients.name} possui o IMC de: ${(patients.weight / ((patients.height/100) ** 2)).toFixed(2)}`
// }

// function printIMC(patients) {
//   return `Paciente ${patients.name} possui o IMC de: ${(patients.weight / ((patients.height/100) ** 2)).toFixed(2)}`
// }


for (let patient of patients) {
  let IMCmsg = printIMC(patient)
  alert(IMCmsg)
}


