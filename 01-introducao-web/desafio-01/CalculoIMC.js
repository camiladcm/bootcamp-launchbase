// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = "Camila";
const peso = 73;
const altura = 1.73;
const sexo = "F";

const imc = peso / (altura * altura);

console.log(`Seu IMC é de: ${imc}`);

if (imc >= 30) {
  console.log(`${nome}, você está acima do peso!`);
} else {
  console.log(`${nome}, você não está acima do peso!`);
}