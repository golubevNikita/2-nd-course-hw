function turnTheTextOver() {
    const userString = prompt('Введи здесь то, что хочешь перевернуть');
    alert(userString.split('').reverse().join(''));
};
