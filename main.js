const button = document.querySelector('.btn');
const box1 = document.querySelector('[data-box1]')
const box2 = document.querySelector('[data-box2]')
const text1 = document.querySelector('[data-first]')
const text2 = document.querySelector('[data-sec]')
const mainBody = document.querySelector('body')

const firstColor = generateColor();
const secColor = generateColor();

function generateColor() {
  const rand = Math.floor(Math.random() * 16777215).toString(16)
  return rand;
}

function getColor() {
  const firstColor = generateColor();
  const secColor = generateColor();
  box1.style.backgroundColor = `#${firstColor}`
  box2.style.backgroundColor = `#${secColor}`
  text1.innerHTML = `#${firstColor}`
  text2.innerHTML = `#${secColor}`
  mainBody.style.backgroundImage = `linear-gradient(${randNum()}deg,#${firstColor},#${secColor})`
}

function randNum() {
  const arr = [];
  for (let i = 0; i <= 360; i++) {
    arr.push(i);
  }
  const randmArr = Math.floor(Math.random() * arr.length);
  return randmArr
}

button.addEventListener('click', () => {
  getColor();
})

addEventListener('load', () => {
  box1.style.backgroundColor = `#${firstColor}`
  box2.style.backgroundColor = `#${secColor}`
  text1.innerHTML = `#${firstColor}`
  text2.innerHTML = `#${secColor}`
  mainBody.style.backgroundImage = `linear-gradient(${randNum()}deg,#${firstColor},#${secColor})`
})