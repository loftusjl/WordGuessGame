// wins
let wins = 0;

// word array
let hangWords = ['zombie', 'cthulu', 'chucky', 'dracula', 'jason', 'freddy', 'wolfman', 'damien', 'mephisto', 'pinhead', 'susan'];

console.log(`Press any key to start`); // change to alert or HTML element
// let anyKe/y = document.getElementById('anyKey');
// $('#anyKey').show();

document.onkeyup = function(anyKey) {
  $('#anyKey').hide();
  // Determines which key was pressed. Will start the game.
  let guesses = 6;

  // generate current word
  let currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
  console.log(currentWord);
  // current word letters array
  let currentWordArray = currentWord.split('');
  
  // Make into function
  // let currentWordDisplay = [];
  // for (i = 0; i < currentWordArray.length; i++) {
  //   currentWordDisplay.push('_');
  // };
  // $('#current-word').innerHTML(currentWordDisplay.toString());
  // // letters guessed array
  // let lettersGuessed = [];
  //   // for (var i = 0; i < currentWord.length; i++) {
  //   //   lettersGuessed[i] = '_';
  //   // }

    let remain = currentWord.length;
    console.log(remain);
  
    document.onkeyup = function(e) {
      let guess = e.key;
      console.log(`You have: ${guesses} guesses remaining`);
      console.log('You guessed: ' + guess);
      
      // push guess into lettersGuessed[]
      lettersGuessed.push(String(guess.toLowerCase()));
      
      let lettersFound = 0; // use lettersFound === currentWordArray.length as win condition
      let guessesLeftElement = document.getElementById('guessesLeft');
      
      // check for correct guess. iterate either letters found or guesses.
      for(let i=0; i < currentWordArray.length; i++) { 
        if (currentWordArray[i].charAt(0) === guess) {
          lettersFound++;
        };
      };
      
      if (lettersFound > 0) { // console feedback. change to alert or html at some point
        
        console.log('You guessed wisely');
      
      }
      else {
        console.log('You guessed poorly');
        guesses--;
        guessesLeftElement.innerHTML = guesses;    

      }
      console.log('current guesses: '+ lettersGuessed.toLocaleString());
      //adds guesses to HTML
      $('#guessesMade').append(' ' + guess + ',');

      if(guesses < 1) { //game over and reset. change from alert to high z-index html 
        let playAgain = confirm("YOU LOSE! Play again?");
        if (playAgain){
          document.location.reload();
        }
        else {alert(`Game Over`)};
    }
      
  };
};