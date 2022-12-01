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

