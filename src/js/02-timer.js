// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
// Бібліотека дла повідомлень користувачу
import Notiflix from 'notiflix';
//

// ініціалізація здеякими параметрами
Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  closeButton: false,
  //   distance: '10px',
  //   opacity: 1,
  // ...
});

const date = document.querySelector('#datetime-picker');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');
// звернення до кнопки
const button = document.querySelector('[data-start]');
//
let timerId = null;
//
button.disabled = true;
//
button.addEventListener('click', updateTimer);

//
flatpickr(date, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      //   window.alert('Please choose a date in the future');
    } else {
      button.disabled = false;
      //   date.disabled = false;

      // console.log(selectedDates[0]);
    }
  },
});

//
function updateTimer() {
  Notiflix.Notify.success('Timer has been started');
  timerId = setInterval(() => {
    const currentTime = new Date(date.value);
    const delta = currentTime - Date.now();
    // console.log(delta);
    button.disabled = true;
    date.disabled = true;
    //
    let { days, hours, minutes, seconds } = convertMs(delta);
    //
    day.textContent = days < 10 ? '0' + days : days;
    hour.textContent = hours < 10 ? '0' + hours : hours;
    minute.textContent = minutes < 10 ? '0' + minutes : minutes;
    second.textContent = seconds < 10 ? '0' + seconds : seconds;
    //
    if (delta <= 1000) {
      clearInterval(timerId);

      button.disabled = true;
      date.disabled = true;
    }
    // button.disabled = false;
  }, 1000);
}
//
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//
// function addLeadingZero(value) {
//     padStart() {

//     };
// }
