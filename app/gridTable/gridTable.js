export const generateNumber = () => Math.floor(Math.random() * 3);

const createTable = (x, y) => {
  const grid = Array(3)
    .fill(null)
    .map(() => Array(3).fill(0));
  fillTable(grid, x, y);
  return grid;
};

const fillTable = (grid, x, y) => {
  grid[x][y] = "X";
};

createTable(generateNumber(), generateNumber());
