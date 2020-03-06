# Hangman
<!--### Initial State: To start the game, press the start button
![State-0](https://github.com/ajay-k/hangman/blob/master/images/State0.png)

### State 1: User is able to input letters and see if they guessed correctly
![State-1](https://github.com/ajay-k/hangman/blob/master/images/State1.png)

### State 2: If user inputs letter in correct letter display it
![State-2](https://github.com/ajay-k/hangman/blob/master/images/State2.png)

### State 3: If user inputs incorrect letter dispaly it in incorrect letters box
![State-3](https://github.com/ajay-k/hangman/blob/master/images/State3.png)

### State 4: If user guesses word correctly, display dialog box and ask if they want to reply
![State-4](https://github.com/ajay-k/hangman/blob/master/images/State4.png)-->

Hangman is a game developed using **HTML**, **CSS**, and **Javascript**. It generates a random word for the user to solve. The user guesses letters to solve the word using the keyboard displayed on screen. This project was made to get a grasp of DOM manipulation along with learning CSS transitions and making API calls.

* Converts randomly generated word from API call to **uppercase** letters

* Finds the location of the letter and places it in correct position on wordbank

* Handles **repetitive** letters in a word

*Correct letter pops up above selected keyboard button and animated to correct placement on wordbank

## How to play

 __Option 1:__

```Download zip from this repository ```
 
 ___OR___   Clone Repo: ```https://github.com/ajay-k/hangman.git: ```


Then, open __index.html__ using Firefox or Google Chrome.

 __Option 2:__
 
[Hangman Github Pages](https://ajay-k.github.io/hangman/)

### Game Setup
A random word is generated automatically upon page loading, if you want another word refresh the page

Select letters on the keyboard to guess the word

* Vowels are highlighted in **orange** on the keyboard to make it easier to distingush

* If letter is in word, keyboard button is turned **green** and animation takes effect to move letter onto correct word position a button is disabled.

* If letter is not in word, keyboard button is turned **red** and button is disabled.


## The Approach Taken
Intially the word was choosen by me, to make it more difficult and dynamic I choose to obtain random words from an API. Once this word is retrieved I create the empty div elements with black bottoms borders on bottom to simulate a empty word bank. I create divs according to the letter for the word, so one empty div for each letter. Then I generate the buttons with corresponding alphabet letters as their values. Once the user clicks on a button I check to see if that letter appears in the word and find all placements of that button and place the letter to its div element. If player guesses the letter wrong I update the image to add a piece of body part and decrease their remaining turns. 

## Screenshots
![GameScreenshot](https://github.com/ajay-k/hangman/blob/master/images/hangmanGame.png)

## Wireframe (Prototype)
![WireFrame](https://github.com/ajay-k/hangman/blob/master/images/State1.png)

## Known Bugs / Unsolved Problems
When resizing the browser window the animiation may animate the letter to the wrong location, but the correct letter will appear on the word bank.

## Sources
[Random Word API](https://github.com/RazorSh4rk/random-word-api)