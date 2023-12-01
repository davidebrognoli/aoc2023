
const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input2.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("\n");

  const result  = lines.reduce((acc, line) => {
    return acc + calculateLine(line)
  }, 0)
  return result;
}

function calculateLine(line) {
  const numbers = Array.from(line).reduce((acc, char, index) => {
    const parsedNumber = parseInt(char, 10)
    if (!isNaN(parsedNumber)){
      acc[index] = parsedNumber
    }
    return acc
  }, [])
  const charNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  charNumbers.forEach((number, index) => {
    let start = 0
    let position
    while (start >= 0) {
      position = line.indexOf(number, start)
      if (position >= 0) {
        numbers[position] = index + 1
      }
      start = position >= 0  ? position + 1 : position
    }
  })
  const array = numbers.filter(char => !isNaN(parseInt(char, 10)))
  const result = parseInt(`${array[0]}${array[array.length - 1]}`, 10)
  return result
}

module.exports = solve;
