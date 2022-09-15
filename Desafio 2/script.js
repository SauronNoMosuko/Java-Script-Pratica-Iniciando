/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC

  peso / (altura * altura) 
*/


const students = [
  {
    name: "Luiz",
    noteOne: 9,
    noteTwo: 5
  },
  {
    name: "Alexandra",
    noteOne: 10,
    noteTwo: 9
  },
  {
    name: "Carlos",
    noteOne: 3,
    noteTwo: 2
  },
]

const media = (noteOne, noteTwo) =>
 (noteOne + noteTwo) / 2

const med = (students) => {
  return `O estudante ${students.name} possui uma média de: ` + media(students.noteOne, students.noteTwo) + ` e foi aprovado`
}

const med1 = (students) => {
  return `O estudante ${students.name} possui uma média de: ` + media(students.noteOne, students.noteTwo) + ` e foi reprovado`
}

for (let student of students) {
  let MEDmsgAprov = med(student)
  let MEDmsgReprov = med1(student)
  if (media(student.noteOne, student.noteTwo) >= 7){
    alert(MEDmsgAprov)
  } else {
    alert(MEDmsgReprov)
  }
}

// function IMC(weight, height) {                                 // Uma
//   return (weight / ((height / 100) ** 2)).toFixed(2)
// }


// function printIMC(patient) {
  //   return `
  //     Paciente ${patient.name} possui o IMC de
  //     ${IMC(patient.weight, patient.height)}                     
  //     `                                                          // só
  // }
// const printIMC = function(patients) {
//   return `Paciente ${patients.name} possui o IMC de: ${(patients.weight / ((patients.height/100) ** 2)).toFixed(2)}`
// }

// function printIMC(patients) {
//   return `Paciente ${patients.name} possui o IMC de: ${(patients.weight / ((patients.height/100) ** 2)).toFixed(2)}`
// }





