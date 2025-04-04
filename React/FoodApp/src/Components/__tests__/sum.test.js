import { sum } from "../sum";

test("sum function should calculate the sum of two numbers", () => {
  const result = sum(2, 5);
  // Assertion
  expect(result).toBe(7);
});
