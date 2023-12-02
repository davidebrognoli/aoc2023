const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input2.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("\n").map(parseLine)

  const result = lines.reduce((acc, sets) => {
    return acc + calculateLine(sets)
  }, 0);
  return result;
}

function parseLine(line) {
  const [_, cubes] =  line.split(":")
  const sets = cubes.split(/[,;]/).map(cube => cube.trim().split(" "))
  return sets
}

function calculateLine(set) {
  const max = set.reduce((acc, cube) => {
    const [counter, color] = cube
    acc[color] =  Math.max(acc[color], Number(counter))
    return acc
  }, {red: 0, green: 0, blue: 0})
  const total = max.red * max.green * max.blue
  return total
}
module.exports = solve;
