// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
// 1 створюємо клас
class CountdownTimer {
  // 4 конструктор
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.selector = selector;
  }
  // 5 метод, затримка
  updateTimer() {
    setInterval(() => {}, 1000);
  }
}
// 2 створюємо екземпляр з об*єктом, який створить новий таймер з налаштуваннями
const timer = new CountdownTimer({
  // 3 виклик та ініціалізація
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 209'),
});
// поточна дата
console.log(new Date());
// дата в мілісекундах
console.log(Date.now());
// // If using flatpickr in a framework, its recommended to pass the element directly
// flatpickr(element, {});

// // Otherwise, selectors are also supported
// flatpickr('#myID', {});

// // creates multiple instances
// flatpickr('.anotherSelector');
