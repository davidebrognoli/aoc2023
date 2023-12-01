const fs = require("fs");
const path = require("path");

const day = process.argv[2];

function writeSolutionScriptToFile(dayDir, fileName, part) {
  const scriptTemplate = `const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input${part}.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("");

  const result = lines.length;
  return result;
}
module.exports = solve;
`;
  fs.writeFileSync(path.join(dayDir, fileName), scriptTemplate);
}

function writeTestScriptToFile(dayDir, fileName, part) {
  const testTemplate = `const solvePart = require("./part${part}");

test("solvePart${part} solves the problem correctly with testdata", () => {
  const result = solvePart("test1.txt");
  const expectedResult = 0;

  expect(result).toEqual(expectedResult);
});

test("solvePart${part} solves the problem correctly", () => {
  const result = solvePart();
  const expectedResult = 0;

  expect(result).toEqual(expectedResult);
});
`;
  fs.writeFileSync(path.join(dayDir, fileName), testTemplate);
}

// Crea la cartella per il giorno
const dayDir = path.join(__dirname, `day${day}`);
if (!fs.existsSync(dayDir)) {
  fs.mkdirSync(dayDir);
}

// Crea i file script e di test
writeSolutionScriptToFile(dayDir, "part1.js", 1);
writeSolutionScriptToFile(dayDir, "part2.js", 2);
writeTestScriptToFile(dayDir, "part1.test.js", 1);
writeTestScriptToFile(dayDir, "part2.test.js", 2);

// Crea il file di input vuoto
fs.writeFileSync(path.join(dayDir, "input1.txt"), "");
fs.writeFileSync(path.join(dayDir, "input2.txt"), "");
fs.writeFileSync(path.join(dayDir, "test1.txt"), "");
fs.writeFileSync(path.join(dayDir, "test2.txt"), "");
