const fs = require('fs');
const path = require('path');

// Prendi il giorno da creare dalla riga di comando
const day = process.argv[2];

// Template per i file script e di test
const scriptTemplate = `
const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("");

  const result = lines.length;
  return result;
}

module.exports = solve;
`;

const testTemplate = `
const solvePart1 = require("./part1");
const solvePart2 = require("./part2");

test("solvePart1 solves the problem correctly", () => {
  const result = solvePart1("test.txt");
  const expectedResult = 0;

  expect(result).toEqual(expectedResult);
});

test("solvePart2 solves the problem correctly", () => {
  const result = solvePart2("test.txt");
  const expectedResult = 0;

  expect(result).toEqual(expectedResult);
});
`;

// Crea la cartella per il giorno
const dayDir = path.join(__dirname, `day${day}`);
if (!fs.existsSync(dayDir)) {
    fs.mkdirSync(dayDir);
}

// Crea i file script e di test
fs.writeFileSync(path.join(dayDir, 'part1.js'), scriptTemplate);
fs.writeFileSync(path.join(dayDir, 'part2.js'), scriptTemplate);
fs.writeFileSync(path.join(dayDir, 'day.test.js'), testTemplate);

// Crea il file di input vuoto
fs.writeFileSync(path.join(dayDir, 'input.txt'), '');
fs.writeFileSync(path.join(dayDir, 'test.txt'), '');
