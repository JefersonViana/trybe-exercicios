
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < higherNumber) {
//     higherNumber = numbers[index];
//   }
// }

// console.log(higherNumber);


// parte 2 //

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

///////////////////////

// parte 3 ///

// let numbers = [];

// for (let index = 1; index <= 25; index += 1) {
//   numbers.push(index);
// }

// for (let index1 = 0; index1 < numbers.length; index1 += 1) {
//   console.log(numbers[index1] / 2);
// }


//////////////
// daqui para baixo feito depois!!
// fatorial de 10
// o fatorial e representado por (10!)
// exemplo: 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 3628800  

// let result = 10;
// let multi = 10;
// for (let index = result; index > 1; index -= 1) {
//   multi *= (index - 1);
  
// }
// console.log(multi);

// alterando a ordem das palavras de trás para frente

// let word = 'casteloforte';
// let newWord = '';
// for (let index = word.length - 1; index >= 0; index -= 1) {
//   newWord += word[index];
// }
// console.log(newWord);

//                         parte 1
//                   pegando a maior string

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maior = 'java';
// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > maior.length) {
//     maior = array[index];
//   }
// }

// console.log(maior);

//                         parte 2
//                   pegando a menor string

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let menor = 'java';
// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < menor.length) {
//     menor = array[index];
//   }
// }

// console.log(menor);


//                         parte 3
//                   pegando a maior e a menor string


// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maior = 'java';
// let menor = 'java';
// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > maior.length) {
//     maior = array[index];
//   } else {
//     menor = array[index];
//   }
// }

// console.log(maior);
// console.log(menor);

