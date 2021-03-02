

let currentUserName = prompt('Введите ваше имя:', 'Имя');

let pidor = confirm('У меня крутой скрипт?');
let pidorResult

if (pidor == 1) (pidorResult = 'молодец')
    else (pidorResult = 'не молодец');

alert(`Вас зовут ${currentUserName} и вы ${pidorResult}`);
