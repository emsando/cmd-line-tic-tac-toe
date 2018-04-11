const board = require('./board.js');
const inquirer = require('inquirer');

let gameRunning = true;
let currentPlayer = 'X' 

let boardMatrix = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

const promptMove = (player, num) => {
  return inquirer.prompt({
    name: `coordinates`,
    message: `Player ${num} (${player}'s), enter coordinates as 'x y':`
  })
  .then((res) => {
    let nums = res.coordinates.split(' ');
    nums = nums.map((num) => parseInt(num));
    boardMatrix[nums[1]][nums[0]] = player;
    console.log(board(boardMatrix));
  });
}

console.log('=============================================');
console.log('Welcome to Tic Tac Toe!');
console.log('Enter coordinates to place your move!');

const startGame = async () => {
  while (gameRunning) {
    console.log(board(boardMatrix))
    await promptMove('X', 1)
      .then(() => {
        promptMove('O', 2);
      })
    gameRunning = false;
  }
}

startGame();
