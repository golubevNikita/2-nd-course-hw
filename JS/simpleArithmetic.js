function simpleArithmetic() {
    const symbolsArray = ['+', '-', '*', '/'];
    const randomSymbol = symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
    const arrayOfNumbers = new Array;
    let result;
    let answer;
    
    for (let i = 0; i < 2; i++) {
        arrayOfNumbers[i] = Math.floor(Math.random() * 20) + 1;
    };
    
    switch (randomSymbol) {
        case '+':
            generatedTask = `Реши задачу:   ${arrayOfNumbers[0]} ${randomSymbol} ${arrayOfNumbers[1]}`;
            result = arrayOfNumbers[0] + arrayOfNumbers[1];
            answer = +prompt(generatedTask);
            if (result === answer) {
                alert('верный ответ');
                break;
            } else {
                alert('ошибка');
                if (confirm('попробуем ещё раз?')) {
                    while (result !== answer) {
                        answer = +prompt(generatedTask);

                        if (result === answer) {
                            alert('верный ответ');
                            break;
                        };
                        break;
                    };
                    break;

                } else {
                    alert('тогда в другой раз');
                    break;
                };
            };

        case '-':
            generatedTask = `Реши задачу:   ${arrayOfNumbers[0]} ${randomSymbol} ${arrayOfNumbers[1]}`;
            result = arrayOfNumbers[0] - arrayOfNumbers[1];
            answer = +prompt(generatedTask);
            if (result === answer) {
                alert('верный ответ');
                break;
            } else {
                alert('ошибка');
                if (confirm('попробуем ещё раз?')) {
                    while (result !== answer) {
                        answer = +prompt(generatedTask);
                        
                        if (result === answer) {
                            alert('верный ответ');
                            break;
                        };
                        break;
                    };
                    break;

                } else {
                    alert('тогда в другой раз');
                    break;
                };
            };

        case '*':
            generatedTask = `Реши задачу:   ${arrayOfNumbers[0]} ${randomSymbol} ${arrayOfNumbers[1]}`;
            result = arrayOfNumbers[0] * arrayOfNumbers[1];
            answer = +prompt(generatedTask);
            if (result === answer) {
                alert('верный ответ');
                break;
            } else {
                alert('ошибка');
                if (confirm('попробуем ещё раз?')) {
                    while (result !== answer) {
                        answer = +prompt(generatedTask);
                        
                        if (result === answer) {
                            alert('верный ответ');
                            break;
                        };
                        break;
                    };
                    break;

                } else {
                    alert('тогда в другой раз');
                    break;
                };
            };

        case '/':
            if (arrayOfNumbers[0] < arrayOfNumbers[1]) {
                generatedTask = `Реши задачу:   ${arrayOfNumbers[1]} ${randomSymbol} ${arrayOfNumbers[0]}   и округли до ближайшего целого числа`;
                result = Math.round(arrayOfNumbers[1] / arrayOfNumbers[0]);
                answer = +prompt(generatedTask);
            };

            if (arrayOfNumbers[0] >= arrayOfNumbers[1]) {
                generatedTask = `Реши задачу:   ${arrayOfNumbers[0]} ${randomSymbol} ${arrayOfNumbers[1]}   и округли до ближайшего целого числа`;
                result = Math.round(arrayOfNumbers[0] / arrayOfNumbers[1]);
                answer = +prompt(generatedTask);
            };

            if (result === answer) {
                alert('верный ответ');
                break;
            } else {
                alert('ошибка');
                if (confirm('попробуем ещё раз?')) {
                    while (result !== answer) {
                        answer = +prompt(generatedTask);
                        
                        if (result === answer) {
                            alert('верный ответ');
                            break;
                        };
                        break;
                    };
                    break;

                } else {
                    alert('тогда в другой раз');
                    break;
                };
            };

        default:
            console.log('Что-то пошло не так');
            break;
    };
};
