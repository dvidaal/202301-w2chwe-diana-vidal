import { generateNumber } from "./generateNumber/generateNumber.js";
import { createTable } from "./createTable/createTable.js";

createTable(generateNumber(), generateNumber());
