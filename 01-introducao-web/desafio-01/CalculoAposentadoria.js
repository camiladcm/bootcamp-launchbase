// Crie um programa para calcular a aposentadoria de uma pessoa.

const nome = "Camila";
const sexo = "F";
const idade = 28;
const contribuicao = 5;

const aposentadoria = idade + contribuicao;

if ((sexo == "F" && aposentadoria >= 85) || (sexo == "M" && aposentadoria >= 95)) {
  console.log(`${nome}, você pode se aposentar!`);
} else {
  console.log(`${nome}, você ainda não pode se aposentar!`);
}