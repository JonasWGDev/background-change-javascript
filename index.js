
const colors = ['green', 'red', 'aqua', 'rgba(133, 122, 200)', '#f15025', 'silver', 'darkgoldenrod'];

const bg = document.getElementsByClassName('container');
const button = document.getElementById('button');
const text = document.getElementById('text');

button.addEventListener('click', () => {
  const randomNumber = getRandomNumber();

  text.innerHTML = `Change background color: ${colors[randomNumber]}`;

  document.body.style.backgroundColor = colors[randomNumber];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};