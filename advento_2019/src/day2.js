import { chunk } from "jsr:@std/collections/chunk";

const add = (x, y) => x + y;

const mul = (x, y) => x * y;

const performOperation = (op, first, last, allInstructions) => {
	switch(op) {
		case 1 : return add(allInstructions[first], allInstructions[last]);
		case 2 : return mul(allInstructions[first], allInstructions[last]);
    case 99 : throw "stop operation";
	}
}

const performInstruction = (data, allInstructions) => {
  const operation = data[0];
	const first = data[1];
	const last = data[2];
	const result = data[3];
  allInstructions[result] = performOperation(operation, first, last, allInstructions);
  return allInstructions;
}

const getInstructions = (parsedData, chunkedData)=> {
  try {
    for (let i = 0; i < parsedData.length; i++) {
    parsedData = performInstruction(chunkedData[i], parsedData);
    }
  }catch {
    return parsedData;
  }
  return parsedData;
}

const parseData = () => {
  const fileData = Deno.readTextFileSync('./day2_input.txt')
  const splitedData = fileData.split(",");
  const parsedData = splitedData.map(x => parseInt(x));
  const chunkedData = chunk(parsedData, 4);
  return getInstructions(parsedData, chunkedData);
}

console.log(parseData());