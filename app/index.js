import { generateNumber } from "./generateNumber/generateNumber.js";
import { createTable } from "./createTable/createTable.js";

console.table(createTable(generateNumber(), generateNumber()));
