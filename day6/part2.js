const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input2.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("\n");

  const time = Number(getValues(lines[0], 'Time: ').join(''))
  const record = Number(getValues(lines[1], 'Distance: ').join(''))

  const winningRaces =  Array(time).fill(0).reduce((acc, _, idx) => {
    const distance = calculateDistance(time, idx)
    if (distance > record) {
      acc.push(distance)
    }
    return acc
  }, [])

  return winningRaces.length;
}

function getValues(line, startWith) {
  return line.replace(startWith, '').replace(/\s+/g, ' ').trim().split(' ').map(value => Number(value.trim()))
}

function calculateDistance(time, index) {
  return (time - index - 1) * (index + 1)
}
module.exports = solve;
