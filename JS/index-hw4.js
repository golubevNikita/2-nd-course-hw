// Задание 1
let i = 0;

while (i <= 1) {
    console.log('Привет');
    i++;
}

// Задание 2
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// Задание 3
let i = 7;

while (i <= 22) {
    console.log(i);
    i++;
}

// Задание 4
let obj = {
    Коля : 200,
    Вася : 300,
    Петя : 400,
}

for (key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`)
}

// Задание 5
for (n = 1000; n / 2 > 50; n /= 2) {
    console.log(n)
}

// Задание 6
let month = 31;
let friday = 4;

for (month = 31; month - 7 > -6; month -= 7) {
    if (friday <= 31) {
        console.log(`Сегодня пятница ${friday} число. Необходимо подготовить отчет.`);
        friday += 7;
    }
    console.log(month, friday);
}

// Дополнительное адание 1
let iterations = 0;
for (k = 100; k - 7 > 0; k -= 7) {
    console.log(iterations, '-', k);
    iterations++;
}

let k = 100;
for (iterations = 0; k - 7 > 0; iterations++) {
    console.log(iterations, '-', k);
    k -= 7;
}

// Дополнительное адание 2
const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
months.forEach((element, index) => console.log(`${+index + 1} --- ${element}`));

// Цикл for можно использовать для массивов, но, на мой взгляд, для этого лучше использовать функции высшего порядка 
// массивов - forEach, map, reduce - "родные" функции, которые являются, по сути, методами прототипа массивов

// Дополнительное адание 3
let theBook = {
    name: 'IT and coding training. To senior and back',
    autor: 'John Ronald Reuel Tolkien',
    year: 2024,
    genre: 'novel',
}

for (key in theBook) {
    console.log(`${key}: ${theBook[key]}`);
}

// Дополнительное адание 4
const random = [10, 5, -1, -6, 78, 32, -24, 5, 0, 111];
let min = random[0];

random.forEach((element) => {
    if (element < min) {
        min = element;
    }
})

console.log(min);
