const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input2.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("\n");

  const numbers = []
  const symbols = []

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
      } else if (char === '*'){
        symbols.push(`${i}-${index}`)
      }
    }
  })


  const result  =  symbols.reduce((acc, symbol) => {
    const adjacent = numbers.filter(number => number.positions.includes(symbol))
    if (adjacent.length === 2) {
      acc = acc + (adjacent[0].number * adjacent[1].number)
    }
    return acc
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
