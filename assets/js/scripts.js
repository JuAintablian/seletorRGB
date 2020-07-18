
var colorR = document.querySelector('#color-r')
var colorG = document.querySelector('#color-g')
var colorB = document.querySelector('#color-b')
var inputColorR = document.querySelector('#value-r')
var inputColorG = document.querySelector('#value-g')
var inputColorB = document.querySelector('#value-b')
var selectedColor = document.querySelector('#selectedColor')

inputColorR.value = colorR.value
inputColorG.value = colorG.value
inputColorB.value = colorB.value

selectedColor.style.backgroundColor = `RGB(${colorR.value}, ${colorG.value}, ${colorB.value})`;

function start() {
  colorR.addEventListener('input', handleColorValueChange);
  colorG.addEventListener('input', handleColorValueChange);
  colorB.addEventListener('input', handleColorValueChange);
}

function handleColorValueChange(event) {
  var nameColor = event.target.id;
  var valueColor = event.target.value;

  switch (nameColor) {
    case 'color-r':
      inputColorR.value = valueColor;
      break;
    case 'color-g':
      inputColorG.value = valueColor;
      break;
    case 'color-b':
      inputColorB.value = valueColor;
      break;
  }

  changeBackgroundColor();
}

function changeBackgroundColor() {
  selectedColor.style.backgroundColor = `RGB(${colorR.value}, ${colorG.value}, ${colorB.value})`;
}

start();