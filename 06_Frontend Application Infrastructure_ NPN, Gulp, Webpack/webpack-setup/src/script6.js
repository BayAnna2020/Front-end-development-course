let game = document.getElementById("game"),
    startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    game.style.display = "block";
    startButton.style.display = "none";
})

let enigmaNumber,
    guesses = 0;
enigmaNumber = Math.floor((Math.random() * 1000) + 1);
console.log(enigmaNumber);


function comparisonOfGuessAndEnigmaNumbers() {
    let guessNumber,
        outline;

    guessNumber = parseInt(document.querySelector("#guessNumber").value);
    outline = document.querySelector("#outline");

    if (guessNumber === enigmaNumber) {
        guesses += 1;
        let stats = "Вы угадали! Количество попыток: " + guesses + ". Начать заново? ";
        if (confirm(stats)) {
            location.reload();
        }
    } else if (guessNumber > enigmaNumber) {
        guesses += 1;
        outline.innerHTML = "Попытка № " + guesses + " - искомое число меньше!";

    } else {
        guesses += 1;
        outline.innerHTML = "Попытка № " + guesses + " - искомое число больше!";
    }
}