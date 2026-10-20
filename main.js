let secretNumber = 7;
let guessed = false;
let attempts = 0;

while (attempts < 3) {
    let input = prompt("Угадай число от 1 до 10:");

    if (input === null) {
        console.log("Игра отменена.");
        break;
    }

    let userNumber = Number(input);

    if (!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 10) {
        console.log("Введи целое число от 1 до 10.");
        continue;
    }

    attempts++;

    if (userNumber === secretNumber) {
        console.log("Правильно! Ты угадал!");
        guessed = true;
        break;
    } else if (userNumber < secretNumber) {
        console.log("Загаданное число больше!");
    } else {
        console.log("Загаданное число меньше!");
    }
}

if (!guessed && attempts === 3) {
    console.log("Попытки закончились! Ответ: 7.");
}
