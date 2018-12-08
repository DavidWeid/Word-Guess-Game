// VARIABLES //

// An empty array to store user guesses (keys pressed) and var current guess
var lettersGuessed = [];
var lettersCorrect = [];
var userGuess;

// User starts with 10 guesses
var guessesRemaining = 10;

// User starts with 0 wins
var wins = 0;

// User chooses from alphabet only
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Possible words for the game
var words = ["christmas", "snowman", "mistletoe", "eggnog", "cookies", "presents", "elves", "santa", "reindeer", "snowflakes"];

// Index of first word is 0 ("christmas"), but increases to go to the next word
var wordIndex = 0;

// Current word and used words
var currentWord = words[wordIndex];
var wordsUsed = 0;
var wordDisplay = [];

// This variable is for the music to play only once!
var totalKeyPress = 0;

// FUNCTIONS //

function checkPrint() {

    wordDisplay = [];

    for (var h = 0; h < currentWord.length; h++) {

        // Check if each letter of currentWord is the in lettersCorrect arraay

        // If letter in currentWord is in lettersCorrect array
        if (lettersCorrect.indexOf(currentWord[h]) !== -1) {

            // Push the letter from currentWord into the wordDisplay
            wordDisplay.push(currentWord[h]);

            // If letter in currentWord isn't in lettersCorrect array, print "_"
        } else {

            wordDisplay.push("_");

        }

    }

    document.querySelector("#current-word").innerHTML = wordDisplay.join(" ");

}

function renderWord() {

    // If wordsUsed < total words, render next word
    if (wordsUsed <= (words.length - 1)) {

        currentWord = words[wordIndex];
        guessesRemaining = 10;
        lettersGuessed = [];
        wordDisplay = ["_ ".repeat(currentWord.length)];
        // wordDisplay = [];
        document.querySelector("#current-word").innerHTML = wordDisplay.join(" ");

        // If wordsUsed = total words, render end-game screen
    } else if (wordsUsed === 10) {

        document.querySelector("#current-word").innerHTML = "You guessed all the words! Merry Christmas!";
        document.querySelector("#win-counter").innerHTML = "You got all " + wins + " holiday words!";
        stopgame();
    }

}

function updateLetters() {

    document.querySelector("#letters-guessed").innerHTML = lettersGuessed.join(" ");

}

function updateWins() {

    document.querySelector("#win-counter").innerHTML = wins;

}

function updateGuesses() {

    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;

}

function stopgame() {

    document.onkeyup = function (event) {

        event.preventDefault();

    }

}

function changeBackground() {

    if (wordsUsed === 1) {

        document.getElementById("image").src = "assets/images/christmasTree.jpg";

    } else if (wordsUsed === 2) {

        document.getElementById("image").src = "assets/images/snowman.jpg";

    } else if (wordsUsed === 3) {

        document.getElementById("image").src = "assets/images/mistletoe.jpg";

    } else if (wordsUsed === 4) {

        document.getElementById("image").src = "assets/images/eggnog.jpg";

    } else if (wordsUsed === 5) {

        document.getElementById("image").src = "assets/images/cookies.jpg";

    } else if (wordsUsed === 6) {

        document.getElementById("image").src = "assets/images/presents.jpg";

    } else if (wordsUsed === 7) {

        document.getElementById("image").src = "assets/images/elves.png";

    } else if (wordsUsed === 8) {

        document.getElementById("image").src = "assets/images/santa.jpg";

    } else if (wordsUsed === 9) {

        document.getElementById("image").src = "assets/images/reindeer.jpg";

    } else if (wordsUsed === 10) {

        document.getElementById("image").src = "assets/images/snowflakes.jpg";

    }
}

function playMusic() {

    // Play music on first key press and ONLY once
    if (totalKeyPress === 1) {

    var songs = ["assets/music/carolOfTheBells.mp3", "assets/music/celticChristmas.mp3", "assets/music/letItSnow.mp3", "assets/music/weWishYouAMerryChristmas.mp3"];

    var randomSongIndex = Math.floor(Math.random() * songs.length);
    console.log(randomSongIndex)
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", songs[randomSongIndex]);
    audioElement.play();

    } else {

        return;

    }

}


renderWord();
checkPrint();

document.onkeyup = function (event) {

    // User chooses a letter from the alphabet array
    if (alphabet.indexOf(event.key) !== -1) {

        // Makes totalKeyPress go from 0 to 1 once, allowing music to play ONLY once
        totalKeyPress++

        // Play Music
        playMusic();

        // User guess is in currentWord array (index !== -1)
        if (currentWord.indexOf(event.key) !== -1) {

            if (lettersCorrect.indexOf(event.key) === -1) {

                lettersCorrect.push(event.key);

                checkPrint();

                if (wordDisplay.indexOf("_") === -1) {

                    wordsUsed++;
                    wordIndex++;
                    renderWord();
                    updateGuesses();
                    updateLetters();
                    wins++;
                    updateWins();
                    lettersCorrect = [];
                    changeBackground();

                }

            } else if (lettersCorrect.indexOf(event.key) !== -1) {

                return;

            }

            console.log(currentWord); console.log(lettersCorrect);



            // User guess is not in currentWord array (index === -1)
        } else if (currentWord.indexOf(event.key) === -1) {

            // User guesses letter not previously guessed
            if (lettersGuessed.indexOf(event.key) === -1) {

                guessesRemaining--;

                // Push user guess into lettersGuessed array
                lettersGuessed.push(event.key);

                updateGuesses();
                updateLetters();

                if (guessesRemaining < 1) {

                    wordsUsed++;
                    wordIndex++;
                    renderWord();
                    updateGuesses();
                    updateLetters();
                    lettersCorrect = [];

                }

            }

        }

    }

}