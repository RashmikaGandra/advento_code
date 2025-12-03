import {sumOf} from "jsr:@std/collections";

const subtractWith2 = x => x - 2;

const round = x => Math.floor(x);

const divideWith3 = (x) => x / 3;

const getFuel = (mass) => {
  const divisionValue = divideWith3(mass);
  const roundValue = round(divisionValue);
  const subtractedValue = subtractWith2(roundValue);
  return subtractedValue;
}

const fuelRequirements = () => {
  const input = Deno.readTextFileSync('./day1_input.txt');
  const arrayOfInput = input.split("\n");
  const fuel = arrayOfInput.map(x => getFuel(parseInt(x)));
  const totalSum = sumOf(fuel, x => x);
  return totalSum;
}

console.log(fuelRequirements());