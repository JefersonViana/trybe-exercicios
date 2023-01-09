// parte 1 //

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggerWord = array[0];
// let smallerWord = array[0];

// for(let index = 0; index < array.length; index += 1) {
//     if(array[index].length > biggerWord.length) {
//         biggerWord = array[index];
//     } else if(array[index].length < smallerWord.length) {
//         smallerWord = array[index];
//     }
// }

// console.log(biggerWord);
// console.log(smallerWord);

///////////////////


// parte 2 ///


// let primoMaior = 0;

// for(let index = 3; index < 50; index += 1) {
//     let cont = 0;
//     for(let indexDois = index; indexDois > 2; indexDois -= 1){
//         if(index % indexDois === 0){
//             cont += 1;
//         }
//     }
//     if(cont == 1){
//         if(index > primoMaior){
//             primoMaior = index;
//         }
//     }
// }

// console.log(primoMaior);

/////////////////

// Exercicios Bonus ///

// let n = 5;
// let result = '';

// var a = 0;
// let b = 0;
// const c = 0;

// for (let index = n; index > 0; index -=1) {
//   result += '*';
//   for (let index1 = 0; index1 < n; index1 +=1) {
//     result += ' ';
//   }
//   console.log(result);
// }

// console.log(result)



////////////

// let n = 5;
// let result = '';
// let cont = 1;

// for(let index = n; index > 0; index -= 1){
//     for(let index1 = n ; index1 > 0; index1 -= 1){
//         if(index1 > cont){
//             result = result + ' ';
//         } else {
//             result = result + '*';
//         }
//     }
//     console.log(result);
//     cont += 1;
//     result = '';
// }







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

// numeros primos 
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
// 31, 37, 41, 43, 47,53, 59, 61, 67,
// 71, 73, 79, 83, 89 e 97

//                3 modos diferente de saber o numero primo!!

//                         1° modo

// const numerosPrimos = (limite) => {
//   for (let index = 2; index <= limite; index += 1) {
//     let ehPrimo = true;
//     for (let secondIndex = 2; secondIndex < index; secondIndex++) {
//       if (index % secondIndex === 0) {
//         ehPrimo = false;
//         break;
//       }
//     }
//     if (ehPrimo) {
//       console.log(index);
//     }
//   }
// };
// numerosPrimos(100);

//                               2° modo

// for (let index = 2; index <= 50; index += 1) {
//   let ehPrimo = true;
//   for (let secondIndex = 2; secondIndex < index; secondIndex++) {
//     if (index % secondIndex === 0) {
//       ehPrimo = false;
//       break;
//     }
//   }
//   if (ehPrimo) {
//     console.log(index);
//   }
// }

//                      3° modo 

// const ehPrimo = (valor) =>{
//   for (let secondIndex = 2; secondIndex < valor; secondIndex++) {
//     if (valor % secondIndex === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const numerosPrimos = (limite) => {
//   for (let index = 2; index <= limite; index += 1) {
//     if (ehPrimo(index)) {
//       console.log(index);
//     }
//   }
// };
// numerosPrimos(15);

///////////////////////////////////////////////////////////////////////////