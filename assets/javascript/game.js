$(document).ready(function () {

    var letters = ["c", "h", "r", "i", "s", "t", "m", "a", "s"];

    // This loop goes through the letters array
    for (var i = 0; i < letters.length; i++) {

        // Create a variable equal to <button>
        var letterBtn = $("<button>");

        // Give each variable classes
        letterBtn.addClass("visible");

        // Give each variable an attribute "data-letter" with a value equal to "letters[i]"
        letterBtn.attr("data-letter", letters[i]);

        // Give each varaible a text equal to "letters[i]"
        letterBtn.text(letters[i]);

        // Append each variable to the "#buttons" div
        $("#buttons").append(letterBtn);

    };

    document.onkeyup = function (event) {

        if (letters.indexOf(event.key) !== -1) {

            console.log(event.key);

            var letterPressed = event.key;
            
            $("button").keyup(function() {

                $("letterPressed").css("opacity", 1);

            })

        }

    }

})