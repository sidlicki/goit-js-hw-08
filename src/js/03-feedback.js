import throttle from 'lodash.throttle';
//
const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');
const savedValues =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
// console.log(savedValues);

// присвоєння прослуховувача і то як часто він виконується(тротл - функція яка встановлює значення з інпута і записує в локал сторедж не частіше ніж раз в 500мс)
form.addEventListener(
  'input',
  throttle(function () {
    const currentValues = {
      userEmail: email.value,
      userMessage: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentValues));
  }, 500)
);

// якщо в локальному сховищі є збереженні дані - заповнюю ними поля, якщо пусті - для уникнення андефайнд - оператор нулльового поєднання
if (savedValues) {
  email.value = savedValues.userEmail ?? '';
  message.value = savedValues.userMessage ?? '';
}

// сабміт форми і очищення
form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // перевірка чи поле емейл не є пустим (аналог реквайреда в хтмл, тільки виводить алерт)
  if (email.value.trim() === '') {
    alert('Заповніть поле Email для відправки повідомлення');
    return;
  }
  if (message.value.trim() === '') {
    alert('Для відправлення повідомлення, спочатку потрібно його написати 😊');
    return;
  }

  const sentValues = {
    userEmail: email.value,
    userMessage: message.value,
  };
  console.log(sentValues);

  email.value = '';
  message.value = '';

  localStorage.removeItem('feedback-form-state');
});
