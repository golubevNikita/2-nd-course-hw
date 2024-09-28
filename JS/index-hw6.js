// Задание 1
const myArray = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === 10) {
        console.log (myArray[i]);
        break;
    };

    console.log (myArray[i]);
};

// Задание 2
const myArray = [1, 5, 4, 10, 0, 3];

console.log(myArray.indexOf(4));

console.log(findIndex(4, myArray));

function findIndex(el, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(el) === true) {
            if (arr[i] === el) {
                return i;
            };
        } else {
            console.log('Такого элемента нет');
        };
    };
};

// Задание 3
const myArray = [1, 3, 5, 10, 20];
console.log(myArray.join(' '));

// Задание 4
const myArray = new Array;

for (let i = 0; i < 3; i++) {
    const iterationArr = new Array;
    for (let i = 0; i < 3; i++) {
        iterationArr[i] = 1;
    };
    myArray[i] = iterationArr;
};

console.log(myArray);

// Задание 5
const myArray1 = [1, 1, 1];
const myArray2 = [2, 2, 2];

console.log(extendArray(myArray1, myArray2));

function extendArray (increasing, dataArr) {
    for (let i = 0; i < dataArr.length; i++) {
        increasing.push(dataArr[i]);
    };

    return increasing;
};

// Задание 6
const myArray = [9, 8, 7, 'a', NaN, true, 6, 5];

function isANumber (arr) {
    iterationArr = new Array;
    for (el of arr) {
        if ((typeof(el) === 'number') && !Number.isNaN(el)) {
            console.log(el, typeof(el));
            iterationArr.push(el);
        };
    };
    return iterationArr;
};

numbersOnlyArr = isANumber(myArray);

numbersOnlyArr.sort((a, b) => a - b);

console.log(numbersOnlyArr);

/* ---===   ===--- */
const myArray = [9, 8, 7, 'a', NaN, true, 6, 5];

function isANumber (el) {
    if ((typeof(el) === 'number') && !Number.isNaN(el)) {
        console.log(el, typeof(el));
        return el;
    };
};

numbersOnlyArr = myArray.filter(isANumber);

numbersOnlyArr.sort((a, b) => a - b);

console.log(numbersOnlyArr);

// Задание 7
const myArray = [9, 8, 7, 6, 5];
let userNumber = +prompt('Угадай число');

if (myArray.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
};

// Задание 8
myString = 'abcdef';
myArray = myString.split('').reverse().join('');
console.log(myArray)

// Задание 9
const myArray = [[1, 2, 3],[4, 5, 6]];

function superArrOnly (array) {

    const simpleArr = new Array;

    for (element of array) {
        for (i of element) {
            simpleArr.push(i);    
        };
    };

    return simpleArr;
}

console.log(superArrOnly(myArray));

// Задание 10
const myArray = [9, 8, 7, 6, 5];

for (let i = 0; i < myArray.length; i++) {
    if (i !== (myArray.length - 1)) {
        console.log(i, myArray[i] + myArray[i + 1]);
    };
};

// Задание 11
const myArray1 = [9, 8, 7, 6, 5];

function squareEveryElement (arr) {
    return arr.map(el => el ** 2);
};

const myArray2 = squareEveryElement(myArray1);

console.log(myArray1, myArray2);

// Задание 12
const myArray1 = ['Bob', 'Dan', 'Nick', 'Alice', 'Margaret', 'Benedict', 'Jane'];

function lengthElement (arr) {
    return arr.map(el => el.length);
};

const myArray2 = lengthElement(myArray1);

console.log(myArray1, myArray2);

// Задание 13
const myArray = [9, 8, -7, -3, 11, 6, -5];

numbersOnlyArr = myArray.filter(el => el < 0);

console.log(numbersOnlyArr);

// Задание 14
const myArray1 = new Array;

for (let i = 0; i < 10; i++) {
    myArray1[i] = Math.floor(Math.random() * 11);
};

function onlyEven(el) {
    console.log(el % 2)
    if (el % 2 == 0) {
        return el;
    };
};

myArray2 = myArray1.filter(onlyEven);

console.log(myArray1, myArray2);

// Задание 15
const myArray1 = new Array;

for (let i = 0; i < 6; i++) {
    myArray1[i] = Math.floor(Math.random() * 10) + 1;
};

function arithmeticMean (accumulator, currentValue, currentIndex, array) {
    if (currentIndex !== (array.length - 1)) {
        return accumulator += currentValue;
    } else {
        return (accumulator += currentValue) / array.length;
    };
};

const average = myArray1.reduce(arithmeticMean);

console.log(myArray1, average);
