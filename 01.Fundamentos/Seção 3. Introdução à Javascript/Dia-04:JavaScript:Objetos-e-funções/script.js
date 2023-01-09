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

// const adicao = (a, b) => {
//   const valorA = a;
//   const valorB = b;
//   return valorA + valorB;
// }
// console.log(adicao(5, 2));

// const subtracao = (a, b) => {
//   const valorA = a;
//   const valorB = b;
//   return valorA - valorB;
// }
// console.log(subtracao(5, 2));

// const multiplicacao = (a, b) => {
//   const valorA = a;
//   const valorB = b;
//   return valorA * valorB;
// }
// console.log(multiplicacao(5, 2));

// const divisao = (a, b) => {
//   const valorA = a;
//   const valorB = b;
//   return valorA / valorB;
// }
// console.log(divisao(5, 2));

// const modulo = (a, b) => {
//   const valorA = a;
//   const valorB = b;
//   return valorA % valorB;
// }
// console.log(modulo(5, 2));

// const maiorEntreSi = (a, b) => {
//   const valorA = a;
//   const valorB = b;
//   if (valorA > valorB) {
//   return valorA;    
//   } else {
//     return valorB;
//   }
// }
// console.log(maiorEntreSi(5, 6));

// const maiorNumber = (a, b, c) => {
//   const valorA = a;
//   const valorB = b;
//   const valorC = c;
//   if (valorA > valorB && valorA > valorC) {
//   return valorA;
//   } else if (valorB > valorA && valorB > valorC) {
//     return valorB;
//   } else {
//     return valorC;
//   }
// }
// console.log(maiorNumber(5, 9, 9));

// const verification = (number) => {
//   if (number > 0) {
//     return 'positive';
//   } else if (number < 0) {
//     return 'negative';
//   } else {
//     return 'zero';
//   }
// }
// console.log(verification(-1));

// const triangle = (a, b, c) => {
//   const valor1 = a;
//   const valor2 = b;
//   const valor3 = c;
//   let soma = valor1 + valor2 + valor3;
//   if (valor1 < 0 || valor2 < 0 || valor3 < 0) {
//     return 'Erro!'
//   } else if (soma === 180) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(triangle(60, 55, 65));

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



//                         Exercicios FOR/IN

// Imprima no console uma mensagem de boas-vindas 
//para a personagem acima, incluindo seu nome. 
// Use a sintaxe meuObjeto.chave. Valor esperado no console:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log('Bem-vinda,', info.personagem);

// ----------------------------------------------
// Insira no objeto uma nova propriedade com o nome de chave 
//‘recorrente’ e o valor ‘Sim’ e, em seguida, 
//imprima o objeto no console. Use a sintaxe 
//meuObjeto['chave'] = valor. Valor esperado no console:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// info.recorrente = 'Sim';
// console.log(info);
// ------------------------------------------------------

//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// info.recorrente = 'Sim';
// for (const key in info) {
//   console.log(key);
// }
// -------------------------------------------------------


// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// info.recorrente = 'Sim';
// for (const key in info) {
//   console.log(info[key]);
// }
// -------------------------------------------------------

// Agora, defina um segundo objeto com a mesma estrutura 
//(as mesmas chaves) do primeiro e os seguintes 
//valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, 
//‘O último MacPatinhas’, ‘Sim’. 
//Então, imprima os valores de cada objeto juntos, 
//de acordo com cada uma das chaves. Valor esperado no console:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim',
// };

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// }

// for (const key in info) {
//   if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
//     console.log('Ambos recorrentes')
//   } else {
//     console.log(`${info[key]} e ${info2[key]}`);
//   }
// }
// -------------------------------------------------------

//                    LEITURAS DE OBJETOS


// Acesse as chaves nome, sobrenome e titulo, 
//que está dentro da chave livrosFavoritos, 
//e faça um console.log no seguinte formato: 
//“O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// let nome = leitor.nome;
// let lastName = leitor.sobrenome;
// let title = leitor.livrosFavoritos[0].titulo;
// let frase = nome + ' ' + lastName + ' ' + title;
// console.log(`"O livro favorito de ${nome} ${lastName} se chama '${title}'"`);


// Adicione um novo livro favorito na chave livrosFavoritos, 
//que é um array. Atribua a essa chave um objeto contendo as 
//seguintes informações:

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };
// leitor.livrosFavoritos[0].titulo = 'Harry Potter e o Prisioneiro de Azkaban';
// leitor.livrosFavoritos[0].autor = 'JK Rowling';
// leitor.livrosFavoritos[0].editora = 'Rocco';
// console.log(leitor);

//                         EXERCICIOS DE FUNÇÂO

// Crie uma função que receba uma string e retorne true se for 
//um palíndromo, ou false, se não for.

// const verificaPalindrome = (param) => {
//   let reverse = '';
//   for (let index = param.length - 1; index >= 0; index -= 1) {
//     reverse += param[index];
//   }
//   if (param === reverse) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(verificaPalindrome('carro'));

// Outra forma de resolver o exercício é utilizando os métodos split, 
//reverse e join. Primeiro o método split transformará a string em um 
//array onde cada posição será uma letra da string. Depois o método reverse 
//fará o array ficar de trás pra frente. Em seguida o método join faz com 
//que todo o array vire uma string novamente.

// function verificaPalindrome(string) {
//   let reverse = string.split('').reverse().join('');
//   if (string === reverse) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));

//Crie uma função que receba um array de inteiros e retorne o 
//índice do maior valor.


// const numberHigher = (array) => {
//   let startingPosition = array[0];
//   let positionNumberHigher = 0;
//   for (let index = 1; index < array.length; index += 1) {
//     if (array[index] > startingPosition) {
//       startingPosition = array[index];
//       positionNumberHigher = index;
//     }
//   }
//   return positionNumberHigher;
// }
// console.log(numberHigher([2, 3, 6, 7, 10, 1]));

// outra forma abaixo!

// const numberHigher = (array) => {
//   let startingPosition = 0;
//   for (let index = 1; index < array.length; index += 1) {
//     if (array[startingPosition] < array[index]) {
//       startingPosition = index;
//     }
//   }
//   return startingPosition;
// }
// console.log(numberHigher([2, 3, 6, 7, 10, 1]));

//Crie uma função que receba um array de inteiros e retorne o 
//índice do menor valor.

// const smallerNumber = (array) => {
//   let startingPosition = array[0];
//   let positionSmallerNumber = 0;
//   for (let index = 1; index < array.length; index += 1) {
//     if (array[index] < startingPosition) {
//       startingPosition = array[index];
//       positionSmallerNumber = index;
//     }
//   }
//   return positionSmallerNumber;
// }
// console.log(smallerNumber([2, 4, 6, 7, 10, 0, -3]));

// outra forma abaixo!

// const smallerNumber = (array) => {
//   let startingPosition = 0;
//   for (let index = 1; index < array.length; index += 1) {
//     if (array[startingPosition] > array[index]) {
//       startingPosition = index;
//     }
//   }
//   return startingPosition;
// }
// console.log(smallerNumber([2, 3, 6, 7, 10, 1, -3]));

//Crie uma função que receba um array de nomes e retorne o nome 
//com a maior quantidade de caracteres.

// const nameHigher = (array) => {
//   let startingPosition = array[0];
//   for (let index = 1; index < array.length; index += 1) {
//     if (array[index].length > startingPosition.length) {
//       startingPosition = array[index];
//     }
//   }
//   return startingPosition;
// }
// console.log(nameHigher(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// const repeatedNumber = (array) => {
//   let numeroQueRepete = '';
//   let count = 0;
//   let count1 = 0;
//   for (let index = 0; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
//       if (array[secondIndex] === array[index]) {
//         count += 1;
//       }
//     }
//     if (count > count1) {
//       count1 = count;
//       numeroQueRepete = array[index];
//       count = 0;
//     } else {
//       count = 0;
//     }
//   }
//   return numeroQueRepete;
// }
// console.log(repeatedNumber([2, 3, 2, 5, 8, 2, 3]));

//Crie uma função que receba um número natural 
//(número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// const somaTotal = (n) => {
//   let soma = 0;
//   if (n > 0) {
//     for (let index = n; index > 0; index -= 1) {
//       soma += index;
//     }
//   } else {
//     return 'Use somente numero pisitivo';
//   }
//   return soma;
// }

// console.log(somaTotal(8));

// outra forma abaixo !

// const somaTotal = (n) => {
//   let soma = 0;
//     for (let index = n; index > 0; index -= 1) {
//       soma += index;
//     }
//   return soma;
// }

// console.log(somaTotal(5));

//Crie uma função que receba uma string word e outra string ending. 
//Verifique se a string ending é o final da string word. 
//Considere que a string ending sempre será menor que a string word.

// const compatibilidade = (word, ending) => {
//   let tamanho = word.length - 1;
//   for (let index = ending.length - 1; index >= 0; index -= 1) {
//     if (ending[index] === word[tamanho]) {
//       tamanho -= 1;
//       result = true;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(compatibilidade('joaofernando', 'fernando'));


