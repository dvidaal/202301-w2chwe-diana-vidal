import { createTable } from "./createTable";

describe("Given a function createTable", () => {
  describe("When receives a grid of 10x10", () => {
    test("Then it should return a complete table of 3x3", () => {
      const grid = [];
      const expectedResult = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
      ];

      const result = createTable(grid);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
