
const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input1.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("\n");

  const result  = lines.reduce((acc, line) => {
    return acc + calculateLine(line)
  }, 0)
  return result;
}

function calculateLine(line) {
  const numbers = Array.from(line).filter(char => !isNaN(parseInt(char, 10)))
  return parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`, 10)
}

module.exports = solve;
