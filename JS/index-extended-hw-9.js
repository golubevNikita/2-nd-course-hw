// Задание 1
const title1Element = document.querySelector('[data-js-exercise-1-title]');
const button1Element = document.querySelector('[data-js-exercise-1-button]');

button1Element.addEventListener('click', function() {
    title1Element.classList.toggle('forExtendedJS__exerciseOne');
});

// Задание 2
const title2Element = document.querySelector('[data-js-exercise-2-title]');
const button2Element = document.querySelector('[data-js-exercise-2-button]');

button2Element.addEventListener('click', function() {
    title2Element.style.color = 'blue';
});

// Задание 3
const title3Element = document.querySelector('[data-js-exercise-3-title]');
const button3Element = document.querySelector('[data-js-exercise-3-button]');

button3Element.addEventListener('click', function() {
    title3Element.textContent = 'Привет, мир!';
});

// Задание 4
const title4Element = document.querySelector('[data-js-exercise-4-title]');
const button4Element = document.querySelector('[data-js-exercise-4-button]');
const textContentButtonsAbove = document.querySelectorAll('.forExtendedHW__description');

button4Element.addEventListener('click', function() {
    textContentButtonsAbove.forEach(el => el.textContent = 'Измененный текст');
});

// Задание 5
const title5Element = document.querySelector('[data-js-exercise-5-title]');
const button5Element = document.querySelector('[data-js-exercise-5-button]');
const buttonsAboveExceptTheLastOne = document.querySelectorAll('.forExtendedHW__description');

button5Element.addEventListener('click', function() {
    buttonsAboveExceptTheLastOne.forEach(el => el.textContent = 'Новый текст');
});

// Задание 6
const section6Element = document.querySelector('[data-js-exercise-6-section]');
const button6Element = document.querySelector('[data-js-exercise-6-button]');

button6Element.addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.classList.add('forExtendedJS__exerciseSix');
    newElement.textContent = 'Новый абзац';
    section6Element.append(newElement);
});

// Задание 7
const button7Element = document.querySelector('[data-js-exercise-7-button]');

button7Element.addEventListener('click', function() {
    const paragraphEL = document.querySelector('.forExtendedJS__exerciseSix');
    if (paragraphEL) {
        paragraphEL.remove();
    };
});
