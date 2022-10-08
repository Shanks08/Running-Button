const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('#submit');

button.addEventListener('mouseover', () => {
  if (!isValid(email.value, password.value)) {
    const list = button.classList;
    if (list.length === 0) {
      list.add('button-left');
    } else {
      if (list.contains('button-left')) {
        list.remove('button-left');
        list.add('button-right');
      } else if (list.contains('button-right')) {
        list.remove('button-right');
        list.add('button-left');
      }
    }
  } else {
    button.classList.forEach((e) => {
      button.classList.remove(e);
    });
    button.classList.add('button-OK');
  }
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
});

function isValid(email, password) {
  if (email.length > 0 && password.length > 0) return true;
  return false;
}
