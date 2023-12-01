
const solvePart1 = require("./part1");

test("solvePart1 solves the problem correctly with testdata", () => {
  const result = solvePart1("test1.txt");
  const expectedResult = 142;

  expect(result).toEqual(expectedResult);
});

test("solvePart1 solves the problem correctly", () => {
  const result = solvePart1();
  const expectedResult = 54634;

  expect(result).toEqual(expectedResult);
});
