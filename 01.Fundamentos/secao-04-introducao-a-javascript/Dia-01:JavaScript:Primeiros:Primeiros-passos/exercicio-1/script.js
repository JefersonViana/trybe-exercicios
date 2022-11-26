// parte - 1 //

// const a = 7;
// const b = 5;

// const adicao = a + b;
// const subtracao = a - b;
// const multiplicacao = a * b;
// const divisao = a / b;
// const modulo = a % b;

// console.log(adicao);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);

// concluido//


// parte - 2 //

// const valor1 = 49;
// const valor2 = 50;

// if (valor1 > valor2) {
//   console.log('O menor valor é valor2')
// }else if (valor2 > valor1) {
//   console.log('O menor valor é valor1');
// }else {
//   console.log('Os valores são iguais');
// }

// concluido //


// parte - 3 //

// const value1 = 1;
// const value2 = 21;
// const value3 = 21;

// if (value1 > value2 && value1 > value3 && value1 !== value2 && value1 !== value3) {
//   console.log(value1);

// } else if (value1 === value2 && value1 > value3) {
//   console.log('value1 ' + value1 + ' e ' + 'value2 ' + value2 + ' são iguas e maiores que o value3 que é ' + value3);

// }else if (value1 === value3 && value1 > value2) {
//   console.log('value1 ' + value1 + ' e ' + 'value3 ' + value3 + ' são iguais e maiores que o value2 que é ' + value2);

// } else if (value2 > value1 && value2 > value3 && value2 !== value1 && value2 !== value3) {
//   console.log(value2);

// } else if (value2 === value1 && value2 > value3) {
//   console.log('value2 ' + value2 + ' e ' + 'value1' + value1 + ' são iguas e maiores que o value3 que é ' + value3);

// }else if (value2 === value3 && value2 > value1) {
//   console.log('value2 ' + value2 + ' e ' + 'value3 ' + value3 + ' são iguais e maiores que o value1 que é ' + value1);

// }else if(value3 > value1 && value3 > value2) {
//   console.log(value3);

// } else if (value3 === value1 && value3 > value2) {
//   console.log('value3 ' + value3 + ' e ' + 'value1 ' + value1 + ' são iguas e maiores que o value2 que é ' + value2);

// } else if (value3 === value2 && value3 > value1) {
//   console.log('value3 ' + value3 + ' e ' + 'value2 ' + value2 + ' são iguas e maiores que o value1 que é ' + value1);

// } else {
//   console.log('Todos os valores são iguais');
// }

// concluido //


// parte - 4 //

// let valorRecebido = 169;


// if (valorRecebido > 0 && valorRecebido % 2 === 0) {
//   console.log('positive');

// } else if (valorRecebido > 0 && (valorRecebido / 2) % 2 > 0) {
//   console.log('negative');

// } else {
//   console.log('zero');
// }

// concluido //


// parte 5 //

// const anguloA = 60;
// const anguloB = 60;
// const anguloC = 5;

// if (anguloA + anguloB + anguloC === 180) {
//   console.log(true);

// } else if ((anguloA / 2) % 2 > 0 || (anguloB / 2) % 2 > 0 || (anguloC / 2) % 2 > 0) {
// console.log('Erro!');

// } else {
//   console.log(false);
// }

// concluido //


// parte 6 //

// let peca = 'toRre';
// let pecaDeXadrez = peca.toLowerCase(peca);

// switch (pecaDeXadrez) {
//   case 'rei':
//     console.log('vertical, horizontal e diagonal, porém apenas uma casa por vez');
//     break;

//   case 'rainha':
//     console.log('vertical, horizontal e diagonal, quantas casas quiser, desde que estejam livres.');
//     break;

//   case 'torre':
//     console.log('vertical e horizontal, quantas casas quiser');
//     break;

//   case 'bispo':
//     console.log('diagonal, quantas casas quiser');
//     break;

//   case 'cavalo':
//     console.log('Se movimenta em "L"');
//     break;

//   case 'peao':
//     console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas');
//     break;

//   default:
//     console.log('Erro!')
// }

// concluido //

// parte 7 //

// let nota = 99;
// let porcentagem = 100 * (nota / 100);

// if (nota < 0 || nota > 100) {
//   console.log('Erro!');

// } else if (porcentagem >= 90) {
//   console.log('A');

// } else if (porcentagem >= 80) {
//   console.log('B');

// } else if (porcentagem >= 70) {
//   console.log('C');

// } else if (porcentagem >= 60) {
//   console.log('D');

// } else if (porcentagem >= 50) {
//   console.log('E');

// } else if (porcentagem < 50) {
//   console.log('F');

// } else {
//   console.log('Digite um número, Por favor!')
// }

// concluido //

// parte 8 //

// const number1= 5;
// const number2= 10;
// const number3= 7;

// if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0 ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// concluido //


// parte 9 //

// const quantidadeDeProdutos = 1000;
// const custoDoProduto = 35;
// const impostoSobreOProduto = 25;
// const custoTotal = custoDoProduto + ((custoDoProduto * impostoSobreOProduto) / 100);
// const valorDeVenda = 50;
// const lucroPorProduto = valorDeVenda - custoTotal;
// const lucroDaEmpresa = lucroPorProduto * quantidadeDeProdutos;

// if (custoDoProduto < 0 || valorDeVenda < 0 || quantidadeDeProdutos < 0 || impostoSobreOProduto < 0) {
//   console.log('Erro!')
// } else {
//   console.log(lucroDaEmpresa);
// }

// concluido //

// parte 10 //

const salarioBruto = 3000;
let salarioLiquido = 0;
if (salarioBruto <= 1556.94) {
  salarioLiquido = salarioBruto - (salarioBruto * 8 / 100);
  if (salarioLiquido <= 1903.98) {
    console.log(salarioLiquido + ' Isento do imposto de renda');
  }

} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  salarioLiquido = salarioBruto - (salarioBruto * 9 / 100);
  if (salarioLiquido <= 1903.98) {
    console.log(salarioLiquido + ' Isento do imposto de renda parte 2');
  } else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
    console.log(salarioLiquido = salarioLiquido - (salarioLiquido * 7.5 / 100) - 142.80);
  }

} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioLiquido = salarioBruto - (salarioBruto * 11 / 100);
  if (salarioLiquido <= 1903.98) {
    console.log(salarioLiquido + ' Isento do imposto de renda parte 3');
  } else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
    console.log(salarioLiquido = salarioLiquido - (salarioLiquido * 7.5 / 100) - 142.80);
  } else if (salarioLiquido > 2826.65 && salarioLiquido <= 3751.05) {
    console.log(salarioLiquido = salarioLiquido - (salarioLiquido * 15 / 100) - 354.80);
  } else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
    console.log(salarioLiquido = salarioLiquido - (salarioLiquido * 22.5 / 100) - 636.13);
  } else {
    console.log(salarioLiquido = salarioLiquido - (salarioLiquido * 27.5 / 100) - 869.13);
  }

} else if (salarioBruto > 5189.82) {
  salarioLiquido = salarioLiquido - 570.88;
  if (salarioLiquido <= 1903.98) {
    console.log(salarioLiquido + ' Isento do imposto de renda parte 4');
  } else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
    console.log(salarioLiquido = salarioLiquido - (salarioLiquido * 7.5 / 100) - 142.80);
  } else if (salarioLiquido > 2826.65 && salarioLiquido <= 3751.05) {
    console.log(salarioLiquido = salarioLiquido - (salarioLiquido * 15 / 100) - 354.80);
  } else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
    console.log(salarioLiquido = salarioLiquido - (salarioLiquido * 22.5 / 100) - 636.13);
  } else {
    console.log(salarioLiquido = salarioLiquido - (salarioLiquido * 27.5 / 100) - 869.13);
  }
}

// concluido //