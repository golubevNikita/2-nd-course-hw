// Задание 1
function minNumber(first, second) {
    if (first < second) {
        return first;
    };

    if (first > second) {
        return second;
    };

    if (first = second) {
        return 'числа равны';
    };
};

// Задание 2
function ifEven(num) {
    if (num % 2 !== 0) {
        return 'Число нечетное';
    } else {
        return 'Число четное';
    }
};

// Задание 3
function squareNumberConsole(num) {
    console.log(num ** 2);
};

squareNumberConsole(4);

function squareNumberReturn(num) {
    return num ** 2;
};

console.log(squareNumberReturn(5));

// Задание 4
function howOldAreYou() {
    const age = +prompt('Cколько Вам лет');
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    };
};

// Задание 5
function isANumber(first, second) {
    if (isNaN(first) == false && isNaN(second) == false) {
        if (typeof(first) !== 'boolean' && typeof(second) !== 'boolean') {
            return first * second;
        } else {
            return 'Одно или оба значения не являются числом';
        }
    } else {
        return 'Одно или оба значения не являются числом';
    };
};

// Задание 6
function cubingNum () {
    const userInput = +prompt('Введи что-нибудь');
    if (typeof(userInput) === 'number' && Number.isNaN(userInput) === false) {
        return `${userInput} в кубе равняется ${userInput ** 3}`;
    } else {
        return 'Переданный параметр не является числом';
    };
};

// Задание 7
const circle1 = {
    radius: 6,
    getArea,
    getPerimeter,
};

const circle2 = {
    radius: 8,
    getArea,
    getPerimeter,
};

function getArea () {
    return Math.round(Math.PI * this.radius ** 2);
};

function getPerimeter () {
    return Math.round(2 * Math.PI * this.radius);
};
