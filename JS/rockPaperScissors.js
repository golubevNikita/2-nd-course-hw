function rockPaperScissors () {
    const gesturesArray = ['Камень', 'Ножницы', 'Бумага'];

    function winnerGestures (first, second) {
        if (first === 'камень' && second === 'ножницы' || first === 'ножницы' && second === 'камень') {
            return 'камень';
        };
    
        if (first === 'ножницы' && second === 'бумага' || first === 'бумага' && second === 'ножницы') {
            return 'ножницы';
        };
    
        if (first === 'бумага' && second === 'камень' || first === 'камень' && second === 'бумага') {
            return 'бумага';
        };
    
        if (first === second) {
            return 'ничья';
        };
    };

    const computerChoise = gesturesArray[Math.floor(Math.random() * 3)].toLowerCase();
    
    let userChoise = prompt('Выбери свой жест (укажи номер или напиши текстом):\n1. Камень, 2. Ножницы, 3. Бумага').toLowerCase();

    while (!gesturesArray.join(' ').toLowerCase().includes(userChoise)) {
        if (!isNaN(+userChoise)) {
            if (+userChoise >= 1 && +userChoise <= 3) {
                userChoise = gesturesArray[Math.round(+userChoise) - 1].toLowerCase();
            } else {
                userChoise = prompt('Попробуй ещё раз, ты ввёл несуществующий вариант\n(1. Камень, 2. Ножницы, 3. Бумага)').toLowerCase();
            };
        } else {
            userChoise = prompt('Попробуй ещё раз, ты ввёл несуществующий вариант\n(1. Камень, 2. Ножницы, 3. Бумага)').toLowerCase();
        };
    };

    const result = winnerGestures(userChoise, computerChoise);
    console.log(userChoise, computerChoise, result);

    if (result === userChoise) {
        alert(`Раз, два, три.\n\nВаш выбор: ${userChoise}.\nВыбор компьютера: ${computerChoise}.\n\nТы победил!`);
    };

    if (result === computerChoise) {
        alert(`Раз, два, три.\n\nВаш выбор: ${userChoise}.\nВыбор компьютера: ${computerChoise}.\n\nТы проиграл скобка грусти(`);
    };

    if (userChoise === computerChoise) {
        alert(`Раз, два, три.\n\nВаш выбор: ${userChoise}.\nВыбор компьютера: ${computerChoise}.\n\nНичья!`);
    };
};
