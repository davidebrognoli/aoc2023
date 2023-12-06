const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input1.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("\n");

  const times = getValues(lines[0], 'Time: ')
  const distances = getValues(lines[1], 'Distance: ')

  const races = times.map((time, index) => {
    return Array(time).fill(0).reduce((acc, _, idx) => {
      const distance = calculateDistance(time, idx)
      const record = distances[index]
      if (distance > record) {
        acc.push(distance)
      }
      return acc
    }, [])
  })

  const result = races.filter(r => r.length).reduce((acc, race) => {
    return acc * race.length
  }, 1)
  return result;
}

function getValues(line, startWith) {
  return line.replace(startWith, '').replace(/\s+/g, ' ').trim().split(' ').map(value => Number(value.trim()))
}

function calculateDistance(time, index) {
  return (time - index - 1) * (index + 1)
}

module.exports = solve;
