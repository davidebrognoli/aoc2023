const solvePart = require("./part1");

test("solvePart1 solves the problem correctly with testdata", () => {
  const result = solvePart("test1.txt");
  const expectedResult = 6440;

  expect(result).toEqual(expectedResult);
});

test("solvePart1 solves the problem correctly", () => {
  const result = solvePart();
  const expectedResult = 249390788;

  expect(result).toEqual(expectedResult);
});
