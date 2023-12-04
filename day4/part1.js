const fs = require("fs");
const path = require("path");

function solve(inputFile = "input1.txt") {
  const input = fs.readFileSync(path.join(__dirname, inputFile), "utf-8");
  const lines = input.split("\n");

  const result = lines.reduce((acc, line) => {
    return acc + calculateLineScore(line);
  }, 0);
  return result;
}

function calculateLineScore(line) {
  const [_, game] = line.split(":");
  const [wVal, val] = game.split("|");
  const winningValues = wVal
    .trim()
    .split(" ")
    .map(Number)
    .filter((number) => !!number);
  const values = val
    .trim()
    .split(" ")
    .map(Number)
    .filter((number) => !!number);
  const validValues = values.filter((value) => winningValues.includes(value));
  return validValues.length === 0 ? 0 : Math.pow(2, validValues.length - 1);
}
module.exports = solve;
