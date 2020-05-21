window.addEventListener('load', start);

function start() {
  console.log('Página iniciada');
}

let redSelector = document.querySelector('#red');
let greenSelector = document.querySelector('#green');
let blueSelector = document.querySelector('#blue');

let circleDiv = document.querySelector('#colour-circle');

let span = document.querySelector('#rgb-text');

function setColour() {
  document.querySelector('#numbers-red').value = redSelector.value;
  document.querySelector('#numbers-green').value = greenSelector.value;
  document.querySelector('#numbers-blue').value = blueSelector.value;

  // console.log(redSelector.value, greenSelector.value, blueSelector.value);
  circleDiv.style.backgroundColor = `rgb(${redSelector.value}, ${greenSelector.value}, ${blueSelector.value}`;

  span.textContent = `RED: ${redSelector.value} GREEN: ${greenSelector.value} BLUE: ${blueSelector.value}`;
  //console.log(span.textContent);
}

redSelector.addEventListener('input', setColour);
greenSelector.addEventListener('input', setColour);
blueSelector.addEventListener('input', setColour);

/////////////////.
/*

function teste() {
  redSelector.addEventListener('input', setColour, console.log(red.value)),
    greenSelector.addEventListener('input', setColour,console.log(green.value)),
    blueSelector.addEventListener('input', setColour, console.log(blue.value));
}
*/
/////////////////////////
/*
redSelector.addEventListener('input', function () {
  red = this.value;
  document.querySelector('#numbers-red').value = red;
});

greenSelector.addEventListener('input', function () {
  var green = this.value;
  document.querySelector('#numbers-green').value = green;
});

blueSelector.addEventListener('input', function () {
  var blue = this.value;
  document.querySelector('#numbers-blue').value = blue;
});
*/
//////////////////////////////////

//console.log(red, green, blue);

/*
function setColour(event) {
    var colour = this.value;
    //var colour = event.target.value;   // tambem funciona
    console.log(colour);
  }
  redSelector.addEventListener('input', setColour);
  greenSelector.addEventListener('input', setColour);
  blueSelector.addEventListener('input', setColour);
  */
