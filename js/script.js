window.addEventListener('load', start);

function start() {
  console.log('Página iniciada');
}

let redSelector = document.querySelector('#red');
let greenSelector = document.querySelector('#green');
let blueSelector = document.querySelector('#blue');

let circleDiv = document.querySelector('#color-circle');

let span = document.querySelector('#rgb-text');

function setColor() {
  document.querySelector('#numbers-red').value = redSelector.value;
  document.querySelector('#numbers-green').value = greenSelector.value;
  document.querySelector('#numbers-blue').value = blueSelector.value;

  // console.log(redSelector.value, greenSelector.value, blueSelector.value);
  circleDiv.style.backgroundColor = `rgb(${redSelector.value}, ${greenSelector.value}, ${blueSelector.value}`;

  span.textContent = `RED: ${redSelector.value} GREEN: ${greenSelector.value} BLUE: ${blueSelector.value}`;
  //console.log(span.textContent);
}

redSelector.addEventListener('input', setColor);
greenSelector.addEventListener('input', setColor);
blueSelector.addEventListener('input', setColor);
