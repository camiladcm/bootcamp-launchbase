// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

const usuario = {
  programador: "Carlos",
  idade: 32,
  tecnologias: [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' },
  ],
};

console.log(`O usuário ${usuario.programador} tem ${usuario.idade} anos e usa a tecnologia ${usuario.tecnologias[0].nome} com especialidade em ${usuario.tecnologias[0].especialidade}`);