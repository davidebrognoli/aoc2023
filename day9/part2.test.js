const solvePart = require("./part2");

test("solvePart2 solves the problem correctly with testdata", () => {
  const result = solvePart("test2.txt");
  const expectedResult = 2;

  expect(result).toEqual(expectedResult);
});

test("solvePart2 solves the problem correctly", () => {
  const result = solvePart();
  const expectedResult = 1129;

  expect(result).toEqual(expectedResult);
});
