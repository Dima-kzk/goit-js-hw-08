import throttle from 'lodash.throttle';

const FEEDBACK_STATE = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const data = {};

feedbackForm.addEventListener(
  'input',
  throttle(event => {
    event.preventDefault();
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
  feedbackForm.email.value = temp.email;
  feedbackForm.message.value = temp.message;
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  feedbackForm.email.value = '';
  feedbackForm.message.value = '';
  if (
    localStorage.length === 0 ||
    localStorage.getItem(FEEDBACK_STATE) === null
  )
    return;
  const temp = JSON.parse(localStorage.getItem(FEEDBACK_STATE));
  console.log(temp);
  localStorage.removeItem(FEEDBACK_STATE);
});
