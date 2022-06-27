import Notiflix from 'notiflix';

// звертаємося до форми
const form = document.querySelector('.form');
// вішаємо слухача
form.addEventListener('submit', formSubmit);
//
function formSubmit(event) {
  // відміна перезагрузки
  event.preventDefault();
  //  деструкторизація
  const { delay, step, amount } = event.target.elements;

  for (let i = 0; i < amount.value; i += 1) {
    let position = i + 1;

    let passed = Number(delay.value) + Number(step.value) * i;
    //  ф-ція яка повертає один проміс
    createPromise(position, passed)
      .then(object => {
        const { position, delay } = object;
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(object => {
        const { position, delay } = object;
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
//  ф-ці викликається при сабміті
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
//
