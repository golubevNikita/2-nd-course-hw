// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 },
];

console.log(people.sort((a, b) => a.age - b.age));

// Задание 2
const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'},
];

function isPositive(item) {
    return item >= 0;
};

function isMale(item) {
    return item.gender === 'male';
};

function filter(arr, ruleFunction) {
    const newArr = [];

    for (el of arr) {
        if (ruleFunction(el)) {
            newArr.push(el);
        };
    };
    return newArr;
};

console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people, isMale));

/* новый массив, образованный по результатам вызова метода map, как будто бы всегда будет равен длине
массива, в котором этот метод вызывали, и в любом случае вернёт значение какого-либо выражения - 
инструкции по типу continue ему не подходят (я пытался, честно) - такии образом, в итоговом массиве
среди элементов, выполнивших условия функции-регулятора, будет undefined - результат, который
получен из-за невыполнения итеррируемым элементом условий функции-регулятора */

const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'},
];

function isPositive(item) {
    return item >= 0;
};

function isMale(item) {
    return item.gender === 'male';
};

function filter(arr, ruleFunction) {
    const result = arr.map((el) => {
        if (ruleFunction(el)) {
            return el;
        };
    });

    const newArr = result.filter((el) => el !== undefined); // зато через map

    return newArr;
};

console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people, isMale));

// Задание 3
function printDate(interval, duration) {

    function callMessage () {
        console.log(new Date().toString());
    };
    
    const intervalID = setInterval(callMessage, interval * 1000);
    
    setTimeout(() => {
        console.log(`${duration} сек прошло`);
        clearInterval(intervalID);
    }, duration * 1000);
};

printDate(3, 12);

// Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        };
    }, 1000);
};

function sayHi (name) {
    console.log(`Привет, ${name}!`);
};

delayForSecond(() => sayHi('Глеб'));
