function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// 1 звертаємося до кнопки старт
const startBtn = document.querySelector('[data-start]');
console.log(startBtn);
// 2 звертаємося до кнопки end
const stopBtn = document.querySelector('[data-stop]');
console.log(stopBtn);
// 3 звертаємося до body
const body = document.querySelector('body');
// codepen
let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    const colory = getRandomHexColor();
    body.style.backgroundColor = colory;
  }, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  clearInterval(timerId);
  //   console.log(`Interval with id ${timerId} has stopped!`);
});

// $(document).ready(function() {
//   $('#two').click(function() {
//     $(this).attr('disabled', true); // Либо добавить атрибут disabled
//   });

//   $('#one').click(function() {
//     $(this).hide(); // Либо скрыть
//   });
// });
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

// <button id="one">Скрыть</button>
// <button id="two">Добавить атрибут disabled</button>
