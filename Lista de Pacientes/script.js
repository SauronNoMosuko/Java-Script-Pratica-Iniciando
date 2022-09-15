/* 

  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

    Escreva uma lista contendo o nome dos pacientes

*/

const patients = [
  {
    name: "luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Carlos",
    age: 10,
    weight: 40,
    height: 130
  },
  {
    name: "Paulo",
    age: 19,
    weight: 78,
    height: 180
  },
]

let patientName = []

for (let patient of patients) {
  patientName.push(patient.name)
}

let patientAge = []

for (patient of patients) {
  patientAge.push(patient.age)
}

// for (let index = 0; index < patients.length ; index++) {
//   patientName[index] = patients[index].name
// }

alert(patientName)
alert(patientAge)