function predictNumber() {
    const generatedNumber = Math.floor(Math.random() * 100) + 1;

    let userNumber = +prompt('Попробуй угадать число от 1 до 100');

    if (userNumber === 0) {
        alert('Тогда в другой раз');
    } else {
        while (generatedNumber !== userNumber) {
            if (typeof(userNumber) !== 'number' || isNaN(userNumber)) {
                alert('Ты ввёл не число');
                userNumber = +prompt('Ещё попытка');
            };

            if (userNumber === 0)  {
                alert('Тогда в другой раз');
                break;
            };

            if (userNumber < generatedNumber) {
                alert('Загаданное число больше');
                userNumber = +prompt('Ещё попытка');
            };
        
            if (userNumber > generatedNumber) {
                alert('Загаданное число меьше');
                userNumber = +prompt('Ещё попытка');
            };
        
            if (userNumber === generatedNumber) {
                alert('Правильно!');
            };
        };    
    };
};
