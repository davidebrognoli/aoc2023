
const solvePart2 = require("./part2");

test("solvePart2 solves the problem correctly with testdata", () => {
  const result = solvePart2("test2.txt");
  const expectedResult = 281;

  expect(result).toEqual(expectedResult);
});

test("solvePart2 solves the problem correctly", () => {
  const result = solvePart2();
  const expectedResult = 53855;

  expect(result).toEqual(expectedResult);
});
