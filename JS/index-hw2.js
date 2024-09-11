// Задание 1
let a = 10;
alert(a);

a = 20;
alert(a);

// Задание 2
const firstIPhone = 2007;
alert(firstIPhone);

// Задание 3
const nameOfCreator = 'Brendan Eich';
alert(nameOfCreator);

// Задание 4
let first = 10;
let second = 2;

alert(
   [first + second,
    first - second,
    first * second,
    first / second]
);

// Задание 5
alert(first ** 5);

// Задание 6
a = 9;
let b = 2;

alert(a % b);

// Задание 7
let num = 1;

num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8
let age = prompt('Сколько вам лет?', 29);
alert(age);

// Задание 9
const user = {
    name: 'Brendan Eich',
    age: 29,
    isAdmin: false,
};

// Задание 10
const userName = prompt('Как тебя зовут?', 'Никита');
alert(`Привет, ${userName}!`);

// Дополнительное задание
let randomNumber = prompt('Загадай любое число');

let doubleScaled = parseInt(randomNumber) * 2;
alert(doubleScaled);

let plusTen = doubleScaled + 10;
alert(plusTen);

let divideByTwo = plusTen / 2;
alert(divideByTwo);

let minusFirst = divideByTwo - randomNumber;
alert(minusFirst);
