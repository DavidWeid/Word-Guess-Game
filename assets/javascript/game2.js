// VARIABLES //

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var currentWord; // Current word
var guess; // Guess
var lettersGuessed = []; // Stored guesses
var guessesRemaining; // Lives
var counter; // Count correct guesses
var space; // Number of blanks in current word

// Elements //

var winCounter = document.getElementById("win-counter");
var showGuessesRemaining = document.getElementById("guesses-remaining");

// Create list of guesses //

result = function () {

    wordHolder = document.getElementById("letters-guessed");
    correct = document.createElement("ul");

    for (var i = 0; i < currentWord.length; i++) {

        correct.setAttribute("id", "my-word");
        guess = document.createElement("li");
        guess.setAttribute("class", "guess");
        if (currentWord[i] === "-") {

            guess.innerHTML = "-";
            space = 1;

        } else {

            guess.innerHTML = "-";

        }

        lettersGuessed.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);

    }

};

// Show guesses remaining //

comments = function () {

    showGuessesRemaining.innerHTML = "You have " + guessesRemaining + " guesses remaining!";

    if (guessesRemaining < 1) {

        showGuessesRemaining.innerHTML = "You didn't get the word!"

    }

    for (var j = 0; j < lettersGuessed.length; j++) {

        if (counter + space === lettersGuessed.length) {

            showGuessesRemaining.innerHTML = "You got it!";

        }

    }

}

// On key press //

document.onkeyup = function (event) {

    var guess = event.key
    for (var k = 0; k < currentWord.length; k++) {

        if (currentWord[k] === guess) {

            lettersGuessed[k].innerHTML = guess;
            counter += 1;

        }

    }

    var l = currentWord.indexOf(guess);
    if (l === -1) {

        guessesRemaining -= 1;
        comments();

    } else {

        comments();

    }

};


play = function () {

    var words = ["christmas", "snowman", "mistletoe", "eggnog", "cookies", "presents", "elves", "santa", "reindeer", "snowflakes"];

    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);

    lettersGuessed = [];
    guessesRemaining = 12;
    counter = 0;
    space = 0;
    result();
    comments();

}

play();