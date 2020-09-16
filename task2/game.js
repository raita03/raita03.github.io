(function () {

    var guessesLeft, randomNumber, correcr_ans, submitButton, answerDisplay, maxGuesses;

    maxGuesses = 3;


    correcr_ans  = document.getElementById("guess");
    submitButton = document.getElementById("submitAnswer");


    answerDisplay = document.getElementById("answer");

    answerDisplay.innerHTML = "Please make a guess!";

    submitButton.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        checkAnswer();
    });

    initGame();

    function initGame () {
        guessesLeft = maxGuesses;
        randomNumber = Math.floor(Math.random() * 10 + 1);
        correcr_ans.value = "";
    }

    function checkAnswer () {

        if (correcr_ans.value == randomNumber) {
            answerDisplay.innerHTML = "You win! " + randomNumber + " is correct. " +
                "Please input your next guess to start again.";
            initGame();
            return;
        }
        else if (correcr_ans.value > randomNumber) {
            answerDisplay.innerHTML = "Correct answer is greater!";
        }
        else {
            answerDisplay.innerHTML = "Correct answer is lower!";
        }

        guessesLeft -= 1;

        if (guessesLeft === 0) {
            answerDisplay.innerHTML += " No guesses left - you lost!";
            initGame();
        }
    }

}());
