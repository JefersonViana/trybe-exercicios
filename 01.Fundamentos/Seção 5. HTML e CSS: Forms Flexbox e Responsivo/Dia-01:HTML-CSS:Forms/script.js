const checkbox2 = document.getElementById('concordo-2');
//checked="teste"
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const textoArea = document.querySelector('#texto');
console.log(checkbox2);
console.log(nome);
console.log(email);
console.log(textoArea);

const submit = (event) =>{
  event.preventDefault();
  // let name1 = nome.value.length;
  // let email1 = email.value.length;
  // let validacao = checkbox2.checked;
  // if (validacao === false) {
  //   event.preventDefault();
  //   console.log(validacao);
  // }
  // if (name1 < 10|| email1 < 10) {
  //   alert('Dados Inválidos');
  // } else {
  //   alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  // }
}

const buttonLimpar = document.getElementById('limpar');
buttonLimpar.addEventListener('click', () => {
  window.location.reload();
});

const enableSubmit = () => {
  const buttonMit = document.querySelector('#submit');
  const concordo2 = document.querySelector('#concordo-2');
  buttonMit.disabled = !concordo2.checked;
};

window.onload = function () {
  const buttonSubmit = document.querySelector('#submit');
  buttonSubmit.addEventListener('click', submit);
  const agreement = document.querySelector('#concordo-2');
  agreement.addEventListener('change', enableSubmit);
};
//(Bônus) Faça a validação dos campos com limite de caracteres. 
//Caso não estejam dentro do esperado ao clicar no botão de submit, 
//um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. 
//Caso contrário, a mensagem ‘Dados enviados com sucesso! 
//Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.