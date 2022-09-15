alert("Vamos calcular sua média?")
let name = prompt("Qual seu nome?");
let noteOne = prompt("Digite a primeira nota:");
let noteTwo = prompt("Digite a segunda nota:");
let noteTree = prompt("Digite a terceira nota:");

  noteOne = Number(noteOne);
  noteTwo = Number(noteTwo);
  noteTree = Number(noteTree);

let med = (noteOne + noteTwo + noteTree) / 3;

med = med.toFixed(2)

if (med >= 7 ) {

  alert(name + " sua média foi de: " + med + ", Parabéns você passou!")

} else {

  alert(name + " sua média foi de: " + med + " e infelizmente você foi para a recuperação :c")

}