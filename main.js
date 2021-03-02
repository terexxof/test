

let currentUserName = prompt('Введите ваше имя:', 'Пидор');

let pidor = confirm('Ты пидор?');
let pidorResult

if (pidor == 1) (pidorResult = 'пидор')
    else (pidorResult = 'красавчик');

alert(`Вас зовут ${currentUserName} и вы ${pidorResult}`);