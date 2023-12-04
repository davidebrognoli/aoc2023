const fs = require("fs");
const path = require("path");

function solve(inputFile = "input2.txt") {
  const input = fs.readFileSync(path.join(__dirname, inputFile), "utf-8");
  const lines = input.split("\n");

  const winningCards = lines.map((line) => {
    const winningValues = calculateWinningValues(line);
    return { count: 1, winningValues };
  });
  winningCards.forEach((card, index) => {
    const { winningValues } = card;
    for (let i = 1; i <= winningValues; i++) {
      const nextCard = winningCards[index + i];
      nextCard.count = nextCard.count + card.count;
    }
  });

  const result = winningCards.reduce((acc, card) => {
    return acc + card.count;
  }, 0);
  return result;
}

function calculateWinningValues(line) {
  const [, game] = line.split(":");
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
  return validValues.length;
}
module.exports = solve;
