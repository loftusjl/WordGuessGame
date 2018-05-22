// wins
let wins = 0;

// word array
let hangWords = ['zombie', 'cthulu', 'chucky', 'dracula', 'jason', 'freddy', 'wolfman', 'damien', 'mephisto', 'pinhead', 'susan'];

document.onkeyup = function(anyKey) {
  // Determines which key was pressed. Will start the game.
  let guesses = 6;

  // generate current word
  let currentWord = hangWords[Math.floor(Math.random() * hangWords.length)];
  console.log(currentWord);
  // current word letters array
  let currentWordArray = currentWord.split('');

  // letters guessed array
  let lettersGuessed = [];

  
    document.onkeyup = function(e) {
      let guess = e.key;
      console.log('You have: ' + guesses);
      console.log('You guessed: ' + guess);
      
      // push guess into lettersGuessed[]
      lettersGuessed.push(String(guess.toLowerCase()));
      
      for(let i=0; i < currentWordArray.length; i++) {
        if (currentWordArray[i].charAt(0) === guess) {
          console.log('You guessed wisely');
          console.log('current guesses: '+ lettersGuessed.toLocaleString());
          break;
        }
        else{
        guesses -= 1;
        console.log('You guessed poorly');
        console.log('current guesses: '+ lettersGuessed.toLocaleString());
    };
  };
    
  };
};
