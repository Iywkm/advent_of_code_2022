import { Day1 } from "../src/day1";

describe("day1 part1", () => {
  const day1 = new Day1();
  describe("findMostCalories", () => {
    it("should return most calories", () => {
      expect(day1.findMostCalories([1, 2, 3])).toBe(3);
    });
  });

  describe("createTotalCalories", () => {
    it("should return total calories list", () => {
      const list = [
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
      ];
      expect(day1.createTotalCalories(list)).toEqual([3, 6, 9]);
    });
  });

  describe("translateList", () => {
    it("should transtale all calories list to elf's carrying calories list", () => {
      const input = "1\n2\n\n1\n2\n3\n\n1";
      expect(day1.translateList(input)).toEqual([[1, 2], [1, 2, 3], [1]]);
    });
  });

  describe("pazzle1", () => {
    it("should return most calories", () => {
      const list = "1\n2\n\n1\n2\n3\n\n1";
      expect(day1.pazzle1(list)).toEqual(6);
    });
  });

  describe("pazzle2", () => {
    it("should return sum of the top three calories", () => {
      const input = "1\n2\n\n1\n2\n3\n\n1\n\n1\n4\n\n4";

      expect(day1.pazzle2(input)).toEqual(15);
    });
  });
});
