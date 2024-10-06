function simpleQuiz () {
    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2,
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2,
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2,
        },
    ];
    
    const correctAnswersNames = quiz.map(el => el['options'][(el.correctAnswer - 1)].split('. ')[1].toLowerCase());
    const correctAnswersNumbers = quiz.map(el => String(el['correctAnswer']));

    const userAnswers = quiz.map((el) => {
        return prompt(`Ответь на вопрос (укажи номер ответа или напиши текстом): ${el['question'] + '\n' + String(el['options']).split(',').join(' ')}`).toLowerCase();
    });

    const correctAnswersCount = [];

    for (i = 0; i < quiz.length; i++) {
        if (userAnswers[i] === correctAnswersNames[i] || userAnswers[i] === correctAnswersNumbers[i]) {
            correctAnswersCount.push(i);
        } else {
            continue;
        };
    };

    return alert(`Количество правильных ответов: ${correctAnswersCount.length}`);
};
