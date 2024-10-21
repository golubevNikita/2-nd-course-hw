const mainBackgroundColor = document.querySelector('[data-js-color-of-background]');
const backgroundColorButton = document.querySelector('[data-js-button-of-change]');

backgroundColorButton.addEventListener('click', function () {
    let colorAccumulator = [];

    function numberOfColorGen (arr) {
        for (let i = 0; i < 3; i++) {
            arr.push(Math.floor(Math.random() * 256));
        };
    
        return arr;
    };
    
    const existingColors = [ // Цвета, которые уже используются на странице и нежелательные для генерации
        [32, 32, 39],
        [188, 236, 48],
        [225, 255, 143],
        [255, 255, 255]
    ];
    
    function compareElements (beingСreated, beingСompared) {
        let redGreenBlue = [];
    
        for (let i = 0; i < beingСreated.length; i++) {
            let temporaryArr = [];
    
            for (item of beingСompared) {
                temporaryArr.push(item[i]);
            };
    
            redGreenBlue.push(temporaryArr);
        };
    
        for (let i = 0; i < beingСreated.length; i++) {
            for (el of redGreenBlue[i]) {
                while (el - 10 <= beingСreated[i] && beingСreated[i] <= el + 10) {
                    beingСreated[i] = (Math.floor(Math.random() * 256));
                };
            };
        };
    
        return beingСreated;
    };
    
    const newColor = (compareElements(numberOfColorGen(colorAccumulator), existingColors));

    mainBackgroundColor.style.backgroundColor = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
});
