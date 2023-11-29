# Advent of Code

This project contains solutions for Advent of Code. Each day has its own folder, which contains two JavaScript files for the two parts of that day's problem, a test file, an `input.txt` file with the input data for the problem and a `test.txt` file with the test input data.

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

## Commands

- `npm test`: Runs all tests in the project.
- `npm run test:day --day=1`: Runs the tests for a specific day. Replace `1` with the number of the day for which you want to run the tests.
- `npm run generate:day --day=1`: Generates the files for a specific day. Replace `1` with the number of the day for which you want to generate the files.
- `npm run run:day --day=1`: Runs the scripts for a specific day. Replace `1` with the number of the day for which you want to run the scripts.

## Project Structure
advent-of-code/
├── package.json
├── package-lock.json
├── node_modules/
├── day1/
│   ├── part1.js
│   ├── part2.js
│   ├── part1.test.js
│   ├── part2.test.js
│   └── input.txt
├── day2/
│   ├── part1.js
│   ├── part2.js
│   ├── part1.test.js
│   ├── part2.test.js
│   └── input.txt
...

In this structure, `day1/`, `day2/`, etc. are directories for each day of Advent of Code. Each directory contains two JavaScript files (`part1.js` and `part2.js`) for the two parts of that day's problem, two test files (`part1.test.js` and `part2.test.js`) for the tests of the two parts, and an `input.txt` file with the input data for the problem.