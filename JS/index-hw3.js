// Задание 1
const password = 'dsblf';

let userPassword = prompt('Введите пароль');

if (password === userPassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2
let c = 2;

(c > 0 && c < 10)
    ? console.log('Верно')
    : console.log('Неверно');

// Задание 3
let d = 50;
let e = 150;

(d > 100 || e > 100)
    ? console.log('Верно')
    : console.log('Неверно');

// Задание 4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// Задание 5
const monthNumber = prompt('Введи номер месяца');

switch (Number(monthNumber)) {
    case (12):
        console.log('зима');
        break;
    case (1):
        console.log('зима');
        break;
    case (2):
        console.log('зима');
        break;

    case (3):
        console.log('весна');
        break;
    case (4):
        console.log('весна');
        break;
    case (5):
        console.log('весна');
        break;

    case (6):
        console.log('лето');
        break;
    case (7):
        console.log('лето');
        break;
    case (8):
        console.log('лето');
        break;

    case (9):
        console.log('осень');
        break;
    case (10):
        console.log('осень');
        break;
    case (11):
        console.log('осень');
        break;

    default: 
    console.log('Неправильно указал число');
};

// Дополнительное задание 1
const check = prompt('Пожалуйста, введите любое число')

if (isNaN(check)) {
    alert('введенное значение не является числом')
} else if (check % 2 != 0) {
    alert('число НЕ чётное')
} else {
    alert('число чётное')
}

// Дополнительное задание 2
const clientOS = navigator.userAgent;

if (clientOS.includes('Linux')) {
    console.log('Ссылка для скачивания на Linux');
} else if (clientOS.includes('iOS')) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS.includes('Android')) {
    console.log('Установите версию приложения для Android по ссылке');
}

// Дополнительное задание 3
const clientOS = navigator.userAgent;
const currentDate = new Date();
const year = 2016;
// Я не нашёл способа узнать год производства устройства прямо из консоли скобочка грусти(

if (year > 2015 && year <= currentDate.getFullYear()) {
    if (clientOS.includes('Linux')) {
        console.log('Ссылка для скачивания на Linux');
    } else if (clientOS.includes('iOS')) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else if (clientOS.includes('Android')) {
        console.log('Установите версию приложения для Android по ссылке');
    }
} else if (year <= 2015 && year > 2007) {
    if (clientOS.includes('iOS')) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else if (clientOS.includes('Android')) {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    }
}
