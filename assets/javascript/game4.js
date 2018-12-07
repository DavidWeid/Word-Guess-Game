// Print out current state of the word

var words = ["christmas"]

var lettersCorrect = [];

var wordDisplay = [];
var word = words[0];

function checkPrint() {

    wordDisplay = [];

    for (var i = 0; i < word.length; i++) {

        // Check's if each letter of word is in the lettersCorrect array
        // If letter in word is in lettersCorrect array
        if (lettersCorrect.indexOf(word[i]) !== -1) {

            wordDisplay.push(word[i]);

        // If letter in word isn't in lettersCorrect array, print "-"
        } else {

            wordDisplay.push("_");

        }

    }

    console.log(wordDisplay);
    document.querySelector("#current-word").innerHTML = wordDisplay.join(" ");

}

document.onkeyup = function (event) {

    // If letter pressed is in the word
    if (word.indexOf(event.key) !== -1 ) {

        if (lettersCorrect.indexOf(event.key) === -1) {

            lettersCorrect.push(event.key);

            checkPrint();

        } else if (lettersCorrect.indexOf(event.key) !== -1) {

            return;

        }

    } else if (word.indexOf(event.key) === -1) {

        return;

    }

    checkPrint();

}

// 