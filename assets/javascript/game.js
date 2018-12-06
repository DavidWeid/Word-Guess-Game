// VARIABLES //

// An empty array to store user guesses (keys pressed)
var lettersGuessed = [];

// User starts with 12 guesses
var guessesRemaining = 12;

// User starts with 0 wins
var wins = 0;

// Array to store the words
var words = ["christmas", "snowman", "mistletoe", "eggnog", "cookies", "presents", "elves", "santa", "reindeer", "snowflakes"];
var wordIndex = 0;
var currentWord = words[wordIndex];
var space = currentWord.length;
var currentWordBlank = "_ ".repeat(space);

console.log(words[wordIndex]); // Logs "christmas" as a string
console.log(space); // Logs "9" as a number
console.log(currentWordBlank); // Shares index with var = words[wordIndex] or var = currentWord

// FUNCTIONS //

// Function renders next word
function renderWord() {

    // If wins < total words, render next word
    if (wins <= (words.length -1)) {

        // document.querySelector("#current-word").innerHTML = currentWord;
        document.querySelector("#current-word").innerHTML = currentWordBlank;

    // If wins = total words, render end-game screen
    } else {

        document.querySelector("#current-word").innerHTML = "You guessed all the words! Merry Christmas!";
        document.querySelector("#win-counter").innerHTML = "You got all " + wins + " holiday words!";

    }

}

function updateLetters() {

    document.querySelector("#letters-guessed").innerHTML = lettersGuessed;

}

// Function to update win counter
function updateWins() {

    document.querySelector("win-counter").innerHTML = wins;

}

function updateGuesses() {

    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;

}

// Calling functions
renderWord();
// updateWins();

///// ----- THE GAME ----- /////

// User presses a key to begin
document.onkeyup = function (event) {

    // User guessed all words, game ends
    if (wins === words.length) {

        return;

    }

    // User guess is in currentWord array (index !== -1)
    if (currentWord.indexOf(event.key) !== -1) {

        // Index correct letter has in currentWord
        var letterIndex = currentWord.indexOf(event.key);

        console.log("Index of user guess in current word: " + letterIndex); // For "christmas", "c" would give index = 0

        console.log("Word blank status: " + currentWordBlank); // For "christmas", logs _ _ _ _ _ _ _ _ _

        // Display correct letter (replace currentWordBlank with letter from currentWord)
        // currentWordBlank.splice( letterIndex, 1, event.key );

        console.log("Word blank status: " + currentWordBlank); // For "christmas", should log "c _ _ _ _ _ _ _ _"

    // User guess NOT in currentWord array (index === -1)
    } else if (currentWord.indexOf(event.key) === -1) {

        // Letter not in lettersGuessed array (index === -1), thus we push into the array lettersGuessed 
        if (lettersGuessed.indexOf(event.key) === -1) {

            lettersGuessed.push(event.key);

            updateLetters();

            console.log("Letters guessed so far: " + lettersGuessed); // logs "lettersGuessed = []; filling array with unique key presses"
            console.log("Last key pressed: " + event.key);
            console.log("Current word: " + currentWord);
            console.log("Letter index of current word: " + currentWord.indexOf(event.key));

            guessesRemaining--;

            updateGuesses();

            console.log(guessesRemaining);

        }

        if (guessesRemaining === 0) {

            wordIndex++;
            console.log("Word index: " + wordIndex);
            console.log("Current word: " + currentWord);
            renderWord();
            guessesRemaining = 12;

        }

    }

}

    // } else if (currentWord.indexOf(event.key) !== -1) {

    //     currentWordBlank[currentWord.indexof(event.key)] = event.key;

    //     renderWord();

    // }
