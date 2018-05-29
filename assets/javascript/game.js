let wins = 0;
let losses = 0;

let hangWords = ['zombie', 'cthulhu', 'chucky', 'dracula', 'jason', 'freddy', 'wolfman', 'damien', 'mephisto', 'pinhead', 'susan'];

console.log(`Press any key to start`); // change to alert or HTML element
// let anyKey = document.getElementById('#anyKey');
// $('#anyKey').show();

document.onkeyup = function () {
  $('#anyKey').hide();
  // Determines which key was pressed. Will start the game.
  let guesses = 6;
  let correctGuesses = 0;
  
  // letters guessed array
  let lettersGuessed = [];
  // generate current word
  let currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
  console.log(currentWord);
  // current word letters array
  let currentWordArray = currentWord.split('');
  
  let currentWordDisplay = []; // build blank array to represent current word
  for (i = 0; i < currentWordArray.length; i++) {
    currentWordDisplay.push('_');
  };
  
  $('#current-word').text(currentWordDisplay.join(' ')); // print blank current word to site
  
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
        correctGuesses++;
        currentWordDisplay[i] = guess;
        $('#guessesMade').append(' ' + guess + ',');
      }
    };
    // console.log(lettersFound);
    $('#current-word').text(currentWordDisplay.join(' ')); // print blank current word to site
    if (correctGuesses >= currentWordArray.length) {
      wins++;
      $('#wins').text(wins);
      alert('You Win!');
      
    }
    else if (lettersFound > 0) {}
    else {
      guesses--;
      guessesLeftElement.innerHTML = guesses;
      $('#guessesMade').append(' ' + guess + ',');
      
      if (guesses < 1) { //game over and reset. change from alert to high z-index html 
        losses++;
        $('#losses').text(losses);
        
        alert("YOU LOSE!");
      };
    };
    
  };
};