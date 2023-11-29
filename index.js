const fs = require("fs");
const path = require("path");

const day = process.argv[2];

try {
  const part1Path = path.join(__dirname, `day${day}`, "part1.js");
  const part2Path = path.join(__dirname, `day${day}`, "part2.js");

  if (!fs.existsSync(part1Path) || !fs.existsSync(part2Path)) {
    console.error(`Scripts for day ${day} not found.`);
    process.exit(1);
  }

  const part1 = require(`./day${day}/part1`);
  const part2 = require(`./day${day}/part2`);

  console.log(`Results for day ${day}:`);
  console.log(`Part 1: ${part1()}`);
  console.log(`Part 2: ${part2()}`);
} catch (error) {
  console.error(`Error executing scripts for day ${day}:`, error);
}
