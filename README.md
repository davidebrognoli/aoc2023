# Advent of Code

This project contains solutions for Advent of Code.

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

## Commands

- `npm test`: Runs all tests in the project.
- `npm run generate:day --day=1`: Generates the files for a specific day. Replace `1` with the number of the day for which you want to generate the files.
- `npm run run:day --day=1`: Runs the scripts for a specific day. Replace `1` with the number of the day for which you want to run the scripts.

## Project Structure

```
advent-of-code/
├── package.json
├── package-lock.json
├── node_modules/
├── day1/
│   ├── part1.js
│   ├── part1.test.js
│   ├── part2.js
│   ├── part2.test.js
│   └── input1.txt
│   └── input2.txt
│   └── test1.txt
│   └── test2.txt
├── day2/
│   ├── part1.js
│   ├── part1.test.js
│   ├── part2.js
│   ├── part2.test.js
│   └── input1.txt
│   └── input2.txt
│   └── test1.txt
│   └── test2.txt
...
```

In this structure, `day1/`, `day2/`, etc. are directories for each day of Advent of Code, which contains two JavaScript files for the two parts of that day's problem (`part1.js` and `part2.js`), corresponding test files (`part1.test.js` and `part2.test.js`), and input/test data files (`input1.txt`, `input2.txt`, `test1.txt`, and `test2.txt`).
