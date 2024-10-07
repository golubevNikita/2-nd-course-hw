// Задание 1
const mySting = 'js';
const myUpperSting = mySting.toUpperCase()
console.log(myUpperSting)

// Задание 2
const myArray = ['Беги, Форрест, беги!',
    'Дженни и я были как горох и морковь',
    'Моя мама говорит дурака видно по его поступкам',
    '-Гамп, почему ты так быстро все сделал? -Потому что вы приказали',
    'Чёрт подери, Гамп, кажется, ты гений. Лучшего ответа я ещё не слышал. У тебя IQ случайно не 160? Ты талантище, рядовй Гамп',
    'Моя мама всегда говорила, что жизнь похожа на коробку шоколадных конфет - никогда не знаешь какую вытянешь',
    'Мне сказали, что моё ранение тянет на миллион долларов, но похоже, что армия оставила эти деньги себe',
    'Мама всегда говорила, что о человеке можно судить по его обуви',
    'Лейтенант Дэн заставил меня вложиться в какую-то фруктовую компанию',
];

function includesString (arr, str) {
    const newMyArray = [];

    for (el of arr) {
        if (el.toLowerCase().startsWith(str.toLowerCase())) {
            newMyArray.push(el);
        } else {
            continue;
        };
    };

    if (newMyArray.length === 0) {
        return 'Совпадений нет';
    } else {
        return newMyArray;
    };
};

console.log(includesString(myArray, 'моя'));

// Задание 3
const myNumber = 32.58884;

/* До меньшего целого */
console.log(Math.floor(myNumber));

/* До большего целого */
console.log(Math.ceil(myNumber));

/* До ближайшего целого */
console.log(Math.round(myNumber));

// Задание 4
const myArray = [52, 53, 49, 77, 21, 32];

function minElement (arr) {
    let minValue = maxValue = arr[0];
    
    for (el of arr) {
        if (el < minValue) {
            minValue = el;
        };

        if (el > maxValue) {
            maxValue = el;
        };

        console.log(el, minValue, maxValue);
    };

    return `Минимальное значение: ${minValue}. максимальное значение: ${maxValue}`;
};

console.log(minElement(myArray));

/* ---===   ===--- */
const myArray = [52, 53, 49, 77, 21, 32];
const minValue = Math.min(...myArray);
const maxValue = Math.max(...myArray);

console.log(`Минимальное значение: ${minValue}. максимальное значение: ${maxValue}`);

// Задание 5
function randomNumberFromOneToTen () {
    return Math.ceil(Math.random() * 10);
};

console.log(randomNumberFromOneToTen());

// Задание 6
function randomArray (num) {
    const myArray = [];

    for (i = 1; i <= num / 2; i++) {
        myArray.push(Math.floor(Math.random() * (num + 1)));
    };

    return myArray;
};

console.log(randomArray(8));

// Задание 7
function randomNumberRange (minnum, maxnum) {
    return Math.floor(Math.random() * ((maxnum - minnum) + 1)) + minnum;
};

console.log(randomNumberRange(8, 15));

// Задание 8
console.log(Date());

// Задание 9
const currentDate = new Date();
function daysToMilliseconds (days) {
    return days * 24 * 60 * 60 * 1000;
}

const convertedDate = new Date(+currentDate + daysToMilliseconds(73)).toString();

console.log(currentDate.toString());
console.log(convertedDate);

// Задание 10
const currentDate = new Date();
const settingsObject = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};

const daysOfTheWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

function getDayandTime (date) {
    const dateString = `Дата: ${date.toLocaleDateString('ru-RU', settingsObject)} — это ${daysOfTheWeek[date.getDay()]}.`;
    const timeString = `Время: ${date.toLocaleTimeString('ru-RU')}`;
    return dateString + '\n' + timeString;
};

console.log(getDayandTime(currentDate));
