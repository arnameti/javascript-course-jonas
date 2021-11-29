'use strict';

/*

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input
  // also if (guess === 0)
  if (!guess) {
    displayMessage('No Number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // if guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too  high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

*/

const number = document.querySelector('.number');
const checkNumber = document.querySelector('.check');
const message = document.querySelector('.message');
const showScore = document.querySelector('.score');
const showHighscore = document.querySelector('.highscore');
const again = document.querySelector('.again');

const randomNumber = () => Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highscore = 0;
let secretNumber = randomNumber();


checkNumber.addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  if (!guessedNumber) {
    displayMessage('Not a number!');
  } else if (guessedNumber !== secretNumber) {
    displayMessage(
      guessedNumber > secretNumber ? 'Number too high!' : 'Number roo low!'
    );
    score--;
    showScore.textContent = score;
    if (!(score > 0)) {
      displayMessage('You lost the game!');
      score = 0;
      showScore.textContent = score;
    }
  } else {
    displayMessage('You won the game');
    if (score > highscore) {
      highscore = score;
      showHighscore.textContent = highscore;
    } else {
      showHighscore.textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  /*
  if(!guessedNumber) {
    message.textContent = 'Not a number!';
  } else if (guessedNumber < secretNumber) {
    if(score > 1) {
      message.textContent = 'Number too low!';
      score--;
      showScore.textContent = score;
    } else {
      message.textContent = 'You lost the game!'
      showScore.textContent = 0;
    }
  } else if (guessedNumber > secretNumber) {
    if(score > 1) {
      message.textContent = 'Number too high!';
      score--;
      showScore.textContent = score;
    } else {
      message.textContent = 'You lost the game!'
      showScore.textContent = 0;
    }
  } else {
    message.textContent = 'You won the game!';
    if (score > highscore) {
      highscore = score;
      showHighscore.textContent = highscore;
    } else {
      showHighscore.textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  */
});

again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = secretNumber;
  document.querySelector('.guess').value = '';
  score = 20;
  showScore.textContent = score;
  displayMessage('Start guessing...');
  number.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  if (highscore === 20) {
    highscore = 0;
    showHighscore.textContent = highscore;
  }
});
