import { fillTable } from "../fillTable/fillTable.js";

export const createTable = (x, y) => {
  const grid = Array(3)
    .fill(null)
    .map(() => Array(3).fill(0));
  fillTable(grid, x, y);
  return grid;
};
