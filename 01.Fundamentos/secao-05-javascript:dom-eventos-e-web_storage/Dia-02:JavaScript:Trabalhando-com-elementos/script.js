let bodyFather = document.getElementById("corpo");
let h1FilhoDeBody = document.createElement('h1');
bodyFather.appendChild(h1FilhoDeBody);
h1FilhoDeBody.id = 'title'
h1FilhoDeBody.innerText = 'TrybeTrip - Agência de Viagens';

let mainSonBody = document.createElement('main');
bodyFather.appendChild(mainSonBody);
mainSonBody.className = 'main-content';

let mainFather = document.getElementsByClassName('main-content')[0];
let sectionSonMain1 = document.createElement('section');
mainFather.appendChild(sectionSonMain1);
sectionSonMain1.className = 'center-content';
let sectionSonMain2 = document.createElement('section');
mainFather.appendChild(sectionSonMain2);
sectionSonMain2.className = 'left-content';
let sectionSonMain3 = document.createElement('section');
mainFather.appendChild(sectionSonMain3);
sectionSonMain3.className = 'right-content';

let son1FromSection1 = document.getElementsByClassName('center-content')[0];
let pSonSection = document.createElement('p');
son1FromSection1.appendChild(pSonSection);
pSonSection.innerText = 'Parágrafo filho de section';

let son1FromSection2 = document.getElementsByClassName('left-content')[0];
let imgSonSection = document.createElement('img');
son1FromSection2.appendChild(imgSonSection);
imgSonSection.src = 'https://picsum.photos/200';
imgSonSection.className = 'small-image';

let son1FromSection3 = document.getElementsByClassName('right-content')[0];
let ulSonSection = document.createElement('ul');
son1FromSection3.appendChild(ulSonSection);

function createList(array) {
  let ulSonSection3 = document.getElementsByTagName('ul')[0];
  for (let index = 0; index < array.length; index += 1) {
    let liSonFromUl = document.createElement('li');
    ulSonSection3.appendChild(liSonFromUl);
    liSonFromUl.innerText = array[index];
  }
}
createList(['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'])

function createSubTitle(number) {
  for (let index = 0; index < number; index += 1) {
    let h3SonFromMain = document.createElement('h3');
    mainFather.appendChild(h3SonFromMain);
    h3SonFromMain.innerText = 'Deu certo!'
  }
}
createSubTitle(3);