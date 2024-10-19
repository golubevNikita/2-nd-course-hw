function predictNumber() {
    const generatedNumber = Math.floor(Math.random() * 100) + 1;

    let number = +prompt('Попробуй угадать число от 1 до 100');

    if (number === 0) {
        alert('тогда в другой раз');
    } else {
        while (generatedNumber !== number) {
            if (number < generatedNumber) {
                alert('Загаданное число больше');
                number = +prompt('Ещё попытка');
            };
        
            if (number > generatedNumber) {
                alert('Загаданное число меьше');
                number = +prompt('Ещё попытка');
            };
        
            if (number === generatedNumber) {
                alert('Правильно!');
            };
        };    
    };
};
