import { Sum } from "../sum";

test("Sum test case", () => {
  const result = Sum(2, 5);

  //assertion
  expect(result).toBe(7);
});
