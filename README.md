# Word-Guess-Game
Javascript Homework
## Project Details
This game is an example of the "Hangman", created with only HTML and Javascript.
### Expectations
1. When the user opens up the game they see an empty "Wins" field, that they have "10" guesses remaining, and a blank "Letters guessed" field. They see a "Current word" field with "_" characters to denote a word with n-number of characters.

2. The player starts the game by pressing a letter of the alphabet (a-z). No other keys do anything.

3. Once a letter is pressed
  a. Music plays. The music is one song and plays until it is over. The song is chosen from a list randomly, but only one song plays.
  b. If the letter is in the current word, it is displayed in the "current word" field.
  c. If the letter is not in the current word, it is displayed in the "Letters guessed" field. Guesses remaining decreases by one.
  d. Repeated letter guesses don't do anything (won't change guesses remaining, won't add to letters guessed >1 time, won't add to current word >1 time).
  
4. Once the word is guessed OR the player runs out of guesses (guesses remaining <1)
  a. The "Current word" field gets replaced by new blanks corresponding to the next word.
  b. The "Letters guessed" field resets to blank.
  c. The "Number of guesses" field resets to "10"
  d. If the player guessed the word, "Wins" increases by 1.
  e. An image is displayed on the right-hand side.
    
5. Expectations 3 and 4 repeat (sans 3a) until the player guesses the last word or runs out of guesses.

6. Once the last word is done
  a. The "Current word" field will change to display the text "You guessed all the words! Merry Christmas!"
  b. The player can no longer interact with the page.
