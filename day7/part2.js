const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input2.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("\n");

  const hands = lines.map(line => {
    const [cards, bid] = line.split(' ')
    const value = {cards, type: calculateType(cards), bid}
    return value
  }, [])

  hands.sort((a, b) => {
    if (a.type > b.type) {
      return 1
    } else if (b.type > a.type){
      return -1
    }

    return compareSameType(a.cards, b.cards)
  })

  const result = hands.reduce((acc, hand, index) => {
    const {bid} = hand
    const points = bid * (index + 1)
    return acc + points
  }, 0);
  return result;
}

function calculateType(hand) {
  const occurrencies = hand.split('').reduce((acc, char) => {
    if (!(char in acc)){
      acc[char] = 0
    }
    acc[char] = acc[char] + 1
    return acc
  }, {})
  let jCounter = 0
  if ('J' in occurrencies && Object.keys(occurrencies).length > 1) {
    jCounter = occurrencies['J']
    delete occurrencies['J']
  }
  const typeList = Object.values(occurrencies).sort((a, b) => b - a)
  switch(typeList[0] + jCounter) {
    case 1:
      return 1
    case 2:
      return typeList[1] === 2 ? 3 : 2
    case 3:
      return typeList[1] === 2 ? 5 : 4
    case 4:
      return 6
    case 5:
      return 7
  }
}

function compareSameType(a, b) {
  const order = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J'];
  let idx = 0
  let aCard = order.indexOf(a[idx])
  let bCard = order.indexOf(b[idx])
  while(idx < 5 && aCard === bCard){
    idx++
    aCard = order.indexOf(a[idx])
    bCard = order.indexOf(b[idx])
  }
  if (aCard < bCard){
    return 1
  } else if (bCard < aCard) {
    return -1
  }
  return 0
}
module.exports = solve;
