const fs = require("fs");
const path = require("path");

function solve(inputFile = 'input1.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const groups = input.split("\n\n");

  const seeds = groups[0].replace('seeds: ', '').trim().split(' ').map(Number)
  const seedsToSoil = calculateMapValues(groups[1])
  const soilToFertilizer = calculateMapValues(groups[2])
  const fertilizerToWater = calculateMapValues(groups[3])
  const waterToLight = calculateMapValues(groups[4])
  const lightToTemperature = calculateMapValues(groups[5])
  const temperatureToHumidity = calculateMapValues(groups[6])
  const humidityToLocation = calculateMapValues(groups[7])

  const locations = seeds.map(seed => {
    const soil = getValue(seed, seedsToSoil)
    const fertilizer = getValue(soil, soilToFertilizer)
    const water = getValue(fertilizer, fertilizerToWater)
    const light = getValue(water, waterToLight)
    const temperature = getValue(light, lightToTemperature)
    const humidity = getValue(temperature, temperatureToHumidity)
    const location = getValue(humidity, humidityToLocation)
    return location
  });
  return Math.min(...locations);
}

function calculateMapValues(group) {
  const [_, values] = group.split(':')
  const triplets = values.trim().split('\n').map(triplet => triplet.split(' ').map(Number))
  return triplets
}

function getValue(value, triplets) {
  const triplet = triplets.find(triplet => value >= triplet[1] && value <= triplet[1] + triplet[2])
  return triplet ? value + triplet[0] - triplet[1] : value
}


module.exports = solve;
