import { Cell } from "../Cell/Cell.js";

export const createTable = () => {
  const grid = Array(5)
    .fill(null)
    .map(() => Array(5).fill(new Cell(Math.floor(Math.random() * 2) === 1)));

  return grid;
};
