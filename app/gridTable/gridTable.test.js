import { generateNumber } from "./gridTable";

describe("Given a function generateNumber", () => {
  describe("When receives the Math.random() method", () => {
    test("Then it should return a number between 1 and 3", () => {
      const expectedResult = [0, 1, 2, 3];

      const receivedNumber = generateNumber();

      expect(expectedResult).toContain(receivedNumber);
    });
  });
});
