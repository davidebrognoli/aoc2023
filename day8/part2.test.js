const solvePart = require("./part2");

test("solvePart2 solves the problem correctly with testdata", () => {
  const result = solvePart("test2.txt");
  const expectedResult = 6;

  expect(result).toEqual(expectedResult);
});

test("solvePart2 solves the problem correctly", () => {
  const result = solvePart();
  const expectedResult = 12927600769609;

  expect(result).toEqual(expectedResult);
});
