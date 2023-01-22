import { Cell } from "./Cell";

describe("Given a class Cell", () => {
  describe("When it receives the isAlive property", () => {
    test("Then it should return undefined", () => {
      const receivedClass = new Cell();
      const expectedResult = undefined;

      const result = receivedClass.isAlive;

      expect(result).toBe(expectedResult);
    });
  });
});
