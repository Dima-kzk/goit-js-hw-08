import throttle from 'lodash.throttle';

const FEEDBACK_STATE = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
let data = {};

feedbackForm.addEventListener(
  'input',
  throttle(event => {
    event.preventDefault();

    if (event.target.name === feedbackForm[0].name) {
      data[feedbackForm[1].name] = feedbackForm[1].value;
    } else if (event.target.name === feedbackForm[1].name) {
      data[feedbackForm[0].name] = feedbackForm[0].value;
    }
    data[event.target.name] = event.target.value;

    localStorage.setItem(FEEDBACK_STATE, JSON.stringify(data));
  }, 500)
);

window.addEventListener('DOMContentLoaded', () => {
  if (
    localStorage.length === 0 ||
    localStorage.getItem(FEEDBACK_STATE) === null
  )
    return;

  const temp = JSON.parse(localStorage.getItem(FEEDBACK_STATE));
  feedbackForm.email.value = temp.email === undefined ? '' : temp.email;
  feedbackForm.message.value = temp.message === undefined ? '' : temp.message;
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (feedbackForm.email.value === '') {
    alert('Введіть e-mail');
    return;
  }

  if (feedbackForm.message.value === '') {
    alert('Введіть повшдомленя');
    return;
  }

  feedbackForm.email.value = '';
  feedbackForm.message.value = '';
  data = {};
  if (
    localStorage.length === 0 ||
    localStorage.getItem(FEEDBACK_STATE) === null
  )
    return;
  const temp = JSON.parse(localStorage.getItem(FEEDBACK_STATE));

  console.log(temp);
  localStorage.removeItem(FEEDBACK_STATE);
});
