let wins = 0;
let losses = 0;
let hangWords = ['zombie', 'cthulhu', 'chucky', 'dracula', 'jason', 'freddy', 'wolfman', 'damien', 'mephisto', 'pinhead', 'susan'];
let currentWordDisplay = []; // build blank array to represent current word
var currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
var currentWordArray = currentWord.split('');
var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaArray = str.split("");
var guesses = 6;
var correctGuesses = 0;
var lettersGuessed = [];
var guessPic = '';

console.log(`Press any key to start`); // change to alert or HTML element
$('#anyKey').show();

document.onkeyup = function () {
  newGame();
  $('#anyKey').hide(); // change to alert
  
  let remain = currentWord.length;
  console.log(remain);
  
  document.onkeyup = function (e) {
    $('#anyKey').hide(); // change to alert
    let guess = e.key;
    let lettersFound = 0; // use lettersFound === currentWordArray.length as win condition
    // check for correct guess. iterate either letters found or guesses.
    if (event.getModifierState("CapsLock")) {
      alert('Turn off Caps Lock and try again.')
    } // make sure CapsLock is off
    else {
      if (alphaArray.includes(guess)) { // check if letter was typed
        if (lettersGuessed.includes(guess.toLowerCase())) { // ignore letters already guessed
          console.log('choose another letter: ' + guess);
        } else {
          lettersGuessed.push(String(guess)); // push guess into lettersGuessed[]
          $('#guessesMade').append(' ' + guess + ',');

          for (let i = 0; i < currentWordArray.length; i++) {
            if (currentWordArray[i].charAt(0) === guess) {
              lettersFound++;
              correctGuesses++;
              currentWordDisplay[i] = guess;
            }
          };
          $('#current-word').text(currentWordDisplay.join(' ')); // print current word with correct guesses to site
          
          if (correctGuesses >= currentWordArray.length) {
            youWin();
          } else if (lettersFound > 0) {} else {
            guesses--;
            guessPic = './assets/images/' + guesses + 'guesses.jpg';
            $('#guessesPic').attr('src', guessPic );
            $('#guessesLeft').text(guesses);
            if (guesses < 1) { //game over and reset. 
              youLose();
            };
          };
        };
      };
    };
  };
};

//------------------------FUNCTIONS------------------------//
function youWin() {
  $('.anyKey').text(`You Win!`);
  $('.anyKeyWord').text(`"${currentWord.toUpperCase()}"`);
  $('#anyKey').show();
  wins++;
  $('#wins').text(wins);
  newGame();
};

function youLose() {
  $('.anyKey').text('You Lose');
  $('.anyKeyWord').text(`"${currentWord.toUpperCase()}"`);
  $('#anyKey').show();
  losses++;
  $('#losses').text(losses);
  newGame();
};

function newGame() {
  guesses = 6;
  correctGuesses = 0;
  lettersGuessed = [];
  currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
  currentWordArray = currentWord.split('');
  currentWordDisplay = []; // build blank array to represent current word

  $('#guessesMade').text('');
  $('#guessesLeft').text('6');
  console.log(currentWord); // check console to cheat... err developer stuff... yeah
  
  for (i = 0; i < currentWordArray.length; i++) {
    currentWordDisplay.push('_');
  };
  $('#current-word').text(currentWordDisplay.join(' ')); // print blank current word to site
};

