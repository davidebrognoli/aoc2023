const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input1.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("\n");

  const next = lines.map(line => {
    return parseLine(line)
  })

  const result = next.reduce((acc, item) => acc + item);
  return result;
}

function parseLine(line) {
  const first = line.split(' ')
  const lines = [first]
  let numbers = first.map(number => Number(number))
  while (!allZero(numbers)) {
    const newLine = []
    for (let i = 1; i < numbers.length; i++) {
      newLine.push(numbers[i] - numbers[i - 1])
    }
    lines.push(newLine)
    numbers = newLine
  }
  return lines.reduce((acc, line) => {
    return acc + Number(line[line.length - 1])
  }, 0)
}

function allZero(numbers) {
  return numbers.every(number => number === 0)
}

module.exports = solve;
