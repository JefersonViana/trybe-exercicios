const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';
pai.style.fontSize = '50px'
console.log(pai);
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Estou entendendo!';
console.log(primeiroFilhoDoFilho);
const primeiroFilho = pai.firstElementChild;
console.log(primeiroFilho);
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
console.log(primeiroFilho2);
const textElement = elementoOndeVoceEsta.nextSibling;
console.log(textElement);
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho);
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
console.log(terceiroFilho2);