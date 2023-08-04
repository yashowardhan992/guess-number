'use strict';

let number = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Refactoring the code using DRY principle -> Dont Repeat Yourself!

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   No input
  if (!guess) {
    displayMessage('No number!');
    // document.querySelector('.message').textContent = 'No number!';
  }
  //   When player wins
  else if (guess === number) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when numberis wrong
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#C82E2C';
    }
  }

  //  Redundant Code :
  // number is high
  //   else if (guess > number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost!';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#C82E2C';
  //     }
  //   }
  //   // number is low
  //   else if (guess < number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost!';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#C82E2C';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start Guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
