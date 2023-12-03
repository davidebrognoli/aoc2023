const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input1.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("\n");

  const numbers = []
  const symbol = new Set()

  lines.forEach((line, index) => {
    const lineArray = line.split('')
    for (let i = 0; i < lineArray.length; i++) {
      const char = lineArray[i]
      let number = parseInt(lineArray[i], 10)
      if (Number.isInteger(number)) {
        let idx = i + 1
        let positions = [...getAdiacent(i, index)]
        while(Number.isInteger(parseInt(lineArray[idx], 10))){
          number = `${number}${lineArray[idx]}`
          i++
          idx++
          positions = [...positions, ...getAdiacent(i, index)]
        }
        numbers.push({number, positions})
      } else if (char !== '.'){
        symbol.add(`${i}-${index}`)
      }
    }
  })

  const result = numbers.reduce((acc, {number, positions}) => {
    const isValid = positions.some(position  => symbol.has(position))
    return acc + (isValid ? parseInt(number, 10) : 0)
  }, 0)

  return result;
}

function getAdiacent(x, y) {
  return [
    `${x-1}-${y-1}`,
    `${x}-${y-1}`,
    `${x+1}-${y-1}`,
    `${x-1}-${y}`,
    `${x+1}-${y}`,
    `${x-1}-${y+1}`,
    `${x}-${y+1}`,
    `${x+1}-${y+1}`,
  ]
}
module.exports = solve;
