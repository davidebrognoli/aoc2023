const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input1.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const [dir, lines] = input.split("\n\n");

  const direction = dir.split('')

  const coordinates = parseLines(lines)
  let idx = 0
  let current = 'AAA'

  while (current !== 'ZZZ'){
    current = getNextItem(idx, direction, coordinates, current)
    idx++
  }

  return idx;
}

function getNextItem(idx, direction, coordinates, current) {
  const key = idx % direction.length
  const next = coordinates.get(current)
  const nextDirection = direction[key]
  return nextDirection === 'L' ? next.left : next.right
}

function parseLines(lines){
  const map = lines.split('\n').reduce((acc, line) => {
    const [start, left, right] = parseLine(line)
    acc.set(start, {left, right})
    return acc
  }, new Map())
  return map
}

function parseLine(line){
  const [start, coordinates] = line.split(' = ')
  let regex = /\((.*?)\)/;
  let match = regex.exec(coordinates);
  const [left, right] = match ? match[1].split(',').map(value => value.trim()) : [];
  return [start, left, right]
}
module.exports = solve;
