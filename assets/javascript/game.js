let wins = 0;
let hangWords = ['zombie', 'cthulu', 'chucky', 'dracula', 'jason', 'freddy', 'wolfman', 'damien', 'mephisto', 'pinhead', 'susan'];

console.log(`Press any key to start`); // change to alert or HTML element
// let anyKe/y = document.getElementById('anyKey');
// $('#anyKey').show();

document.onkeyup = function (anyKey) {
  $('#anyKey').hide();
  // Determines which key was pressed. Will start the game.
  let guesses = 6;
  
  // letters guessed array
  let lettersGuessed = [];
  // generate current word
  let currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
  console.log(currentWord);
  // current word letters array
  let currentWordArray = currentWord.split('');
  
  let currentWordDisplay = [];
  for (i = 0; i < currentWordArray.length; i++) {
    currentWordDisplay.push('_');
  };

  let remain = currentWord.length;
  console.log(remain);

  document.onkeyup = function (e) {
    let guess = e.key;
    let lettersFound = 0; // use lettersFound === currentWordArray.length as win condition
    let guessesLeftElement = document.getElementById('guessesLeft');

    console.log(`You have: ${guesses} guesses remaining`);
    console.log('You guessed: ' + guess);

    // push guess into lettersGuessed[]
    lettersGuessed.push(String(guess.toLowerCase()));

    // check for correct guess. iterate either letters found or guesses.
    for (let i = 0; i < currentWordArray.length; i++) {
      if (currentWordArray[i].charAt(0) === guess) {
        lettersFound++;
      };
    };

    if (lettersFound > 0) { // console feedback. change to alert or html at some point

      console.log('You guessed wisely');

    } else {
      console.log('You guessed poorly');
      guesses--;
      guessesLeftElement.innerHTML = guesses;

    }
    console.log('current guesses: ' + lettersGuessed.toLocaleString());
    //adds guesses to HTML
    $('#guessesMade').append(' ' + guess + ',');

    if (guesses < 1) { //game over and reset. change from alert to high z-index html 
      playAgain(confirm("YOU LOSE! Play again?"));
    }
    
  };
  $('#current-word').text(currentWordDisplay);
};

function playAgain(b){
  if (b == true) {document.location.reload(); // reload site
  } else {alert(`Click refresh or hit F5 if you change your mind.`)};
};