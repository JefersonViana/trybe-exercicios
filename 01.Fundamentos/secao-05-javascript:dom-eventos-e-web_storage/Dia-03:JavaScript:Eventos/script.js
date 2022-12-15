const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const createDaysTheMonth = () => {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysTheMonth = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const dayTheMonth = decemberDaysList[index];
    const day = document.createElement('li');
    day.innerHTML = dayTheMonth;
    day.className = 'day';
    day.style.margin = '1px';

    daysTheMonth.appendChild(day);
  };
}

createDaysTheMonth();

const holiday1 = document.getElementsByClassName('day')[25];
const holiday2 = document.getElementsByClassName('day')[26];
const holiday3 = document.getElementsByClassName('day')[32];
holiday1.className = 'day holiday';
holiday2.className = 'day holiday';
holiday3.className = 'day holiday';

const friday1 = document.getElementsByClassName('day')[5];
const friday2 = document.getElementsByClassName('day')[12];
const friday3 = document.getElementsByClassName('day')[19];
const friday4 = document.getElementsByClassName('day')[26];
friday1.className = 'day friday';
friday2.className = 'day friday';
friday3.className = 'day friday';
friday4.className = 'day holiday friday';

const button = (botao) => {
  const divButton = document.querySelector(".buttons-container");
  const button = document.createElement('button');
  button.innerHTML = botao;
  button.id = "btn-holiday";

  divButton.appendChild(button);
}

button('Feriados');

const backgroundColor = () => {
  const holidayBackgroundColor = document.getElementsByClassName('holiday');
  for (let index = 0; index < holidayBackgroundColor.length; index += 1) {
    const newColor = holidayBackgroundColor[index];
    newColor.style.backgroundColor = 'green';
  }
}

const buttonId = document.getElementById("btn-holiday");
buttonId.addEventListener('click', backgroundColor);

const reverseBackgroundColor = () => {
  const reverseBackgroundColor = document.getElementsByClassName('holiday');
  for (let index = 0; index < reverseBackgroundColor.length; index += 1) {
    const reverseNewColor = reverseBackgroundColor[index];
    reverseNewColor.style.backgroundColor = 'rgb(238,238,238)';
  }
}

buttonId.addEventListener('dblclick', reverseBackgroundColor);

const buttonFriday = (botao) => {
  const divButtonFriday = document.querySelector(".buttons-container");
  const button = document.createElement('button');
  button.innerHTML = botao;
  button.id = "btn-friday";

  divButtonFriday.appendChild(button);
}

buttonFriday('Sexta-feira');

const fridayText = () => {
  friday1.innerHTML = 'Sextouu';
  friday2.innerHTML = 'Sextouu';
  friday3.innerHTML = 'Sextouu';
  friday4.innerHTML = 'Sextouu';
}

const fridayButton = document.getElementById("btn-friday");
fridayButton.addEventListener('click', fridayText);

const fridayNumber = () => {
  friday1.innerHTML = '4';
  friday2.innerHTML = '11';
  friday3.innerHTML = '18';
  friday4.innerHTML = '25';
}
fridayButton.addEventListener('dblclick', fridayNumber);

const mouseOver = () => {
  const day = document.querySelector('#days');
  day.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}

const mouseOut = () => {
  const day = document.querySelector('#days');
  day.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

mouseOver();
mouseOut();
