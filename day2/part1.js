const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input1.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("\n").reduce((acc, line) => {
    const [key, value] = parseLine(line)
    acc[key] = value
    return acc
  }, {});

  const result = Object.entries(lines).reduce((acc, [game, sets]) => {
    if (sets.every(set => isValidSet(set))){
      acc = acc + Number(game)
    }
    return acc
  }, 0);
  return result;
}

function parseLine(line) {
  const [game, cubes] =  line.split(":")
  const gameId = game.trim().split(" ")[1]
  const sets = cubes.split(/[,;]/).map(cube => cube.trim().split(" "))
  return [gameId, sets]
}

function isValidSet(set) {
  const validValues = {red: 12, green: 13, blue: 14}
  const [count, color] = set
  return Number(count) <= validValues[color]
}

module.exports = solve;
