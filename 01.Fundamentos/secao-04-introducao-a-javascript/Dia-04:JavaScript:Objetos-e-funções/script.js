// OBJETOS //

// parte 1//

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// console.log(car.model);

///////////

/// parte 2 ////

// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
// };

// diasDaSemana.1; <<<<<< não pode usar esse tipo se a chave for number
// console.log(diasDaSemana[6]);
/////////////////////////////


// parte 3 ////


// let conta = {
//   agencia: '0000',
//   banco: {
//     cod: '012',
//     id: 4,
//     nome: 'TrybeBank',
//   },
// };

// let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// console.log(conta[infoDoBanco]['nome']); // TrybeBank

// console.log(conta.agencia); // 0000
// console.log(conta['agencia']); // 0000

// console.log(conta.banco.cod); // 012
// console.log(conta['banco']['id']); // 4


// parte 4 ///


// let usuario = {
//   id: 99,
//   email: 'jakeperalta@gmail.com',
//   infoPessoal: {
//     nome: 'Jake',
//     sobrenome: 'Peralta',
//     endereco: {
//       rua: 'Smith Street',
//       bairro: 'Brooklyn',
//       cidade: 'Nova Iorque',
//       estado: 'Nova Iorque',
//     },
//   },
// };

// console.log(usuario['id']); // 99
// console.log(usuario.email); // jakeperalta@gmail.com

// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque


////////////////////

// parte 5 ////



// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log(primeiroMorador['andar']); // 10

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
// console.log(ultimoMorador['apartamento']); // Zoey

//////////////////////////

// parte 6 ////


// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3,
//   }
// }
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// let melhorDoMundo = player.bestInTheWorld.length;

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');
// console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + melhorDoMundo + ' vezes');
// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

// FIM DE OBJETOS ///


// INICIO DE FOR/IN E FOR/OF //

// parte 1 //

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(index, cars[index]);
// }
////////////////////

// parte 2 //

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

///////////////////

// parte 3 //

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let index in names) {
//   console.log('Olá ' + index, names[index])
// }

// parte 4 //

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let key in car) {
//   console.log(key, car[key]);
// }

///////////////////////////////////////////

// COMEÇANDO FUNÇÃO //

// parte 1 //

// Sem função
// let nome = 'João';

// console.log('Bom dia, ' + nome);


// Com função
// function bomDiaTryber(nome) {
  // console.log('Bom dia, ' + nome);
// }

// bomDiaTryber('João'); // Bom dia, João
// bomDiaTryber('Julia'); // Bom dia, Julia
// bomDiaTryber('Marcelo'); // Bom dia, Marcelo

//////////////////////////

// parte 2 //

// function bomDia() {
  // return 'Bom dia!';
// }

// console.log(bomDia()); // Bom dia!

///////////////////////

// parte 3 //

// let status = 'deslogado';

// function logarDeslogar() {
//   if (status === 'deslogado') {
//     status = 'logado';
//   } else {
//     status = 'deslogado';
//   }
// }

// console.log(status); // deslogado

// logarDeslogar();
// console.log(status); // logado

// logarDeslogar();
// console.log(status); // deslogado

// logarDeslogar();
// console.log(status);

// console.log('O usuário está ' + status); // O usuário está deslogado

////////////////////////

// parte 4 //

// Com função
// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(5, 2)); // 7

//////

// parte 5 //

// function maiorNum(primeiroNum, segundoNum) {
//   if (primeiroNum > segundoNum) {
//     return primeiroNum + ' é maior que ' + segundoNum;
//   } else if (segundoNum > primeiroNum) {
//     return segundoNum + ' é maior que ' + primeiroNum;
//   } else {
//     return 'Os números são iguais';
//   }
// }

// console.log(maiorNum(10, 20)); // 20 é maior que 10
// console.log(maiorNum(2, -5)); // 2 é maior que -5
// console.log(maiorNum(1, 1)); // Os números são iguais

///////////////////////////////

// parte 6 //


// exercicio 1 //

// function imprimeIdade() {
//   for (let idade = 30; idade <= 40; idade += 1) {
//     console.log('Idade dentro do for:', idade)
//   }
  
// }
// imprimeIdade()

// exercicio 2 //

// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
//  const pessoa = {
//   nome: 'Henri',
//   idade: 20
// }
// pessoa.nome = 'Luna';
//   pessoa.idadeidade = 19;
//  // Altere essa estrutura para corrigir o erro.
// console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);

// exercicio 3 //

// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hamburguer';
// console.log(favoriteFood);

// exercicio 4 //

// const name = 'Adriana';
// const lastName = 'Soares';
// console.log('Olá' + ',' + name + ' ' + lastName + '!');
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// console.log(`O resultado da soma de ${a} ${b} é: ${soma(a,b)}`);

// exercicio 5 //

// const numeroAleatorio = () => Math.floor(Math.random() * 100);

// console.log(numeroAleatorio());

// exercicio 6 //

// const hello = () => `Olá, ${nome}!`;
// let nome = 'Ivan';
// console.log(hello());

// exercicio 7 //

// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }

// const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto('jeferson', 'Eduardo'));

// exercicio 8 //

// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

// let speed = 90;
// const speedCar = speed >= 120 ? 'Você ultrapassou o limite de velocidade': 'Você está na velocidade permitida';
// console.log(speedCar);
