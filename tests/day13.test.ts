import { Day13 } from "../src/day13";

describe("day13", () => {
  const input =
    "[1,1,3,1,1]\n[1,1,5,1,1]\n\n[[1],[2,3,4]]\n[[1],4]\n\n[9]\n[[8,7,6]]\n\n[[4,4],4,4]\n[[4,4],4,4,4]\n\n[7,7,7,7]\n[7,7,7]\n\n[]\n[3]\n\n[[[]]]\n[[]]\n\n[1,[2,[3,[4,[5,6,7]]]],8,9]\n[1,[2,[3,[4,[5,6,0]]]],8,9]";
  const formatedInput = [
    ["[1,1,3,1,1]", "[1,1,5,1,1]"],
    ["[[1],[2,3,4]]", "[[1],4]"],
    ["[9]", "[[8,7,6]]"],
    ["[[4,4],4,4]", "[[4,4],4,4,4]"],
    ["[7,7,7,7]", "[7,7,7]"],
    ["[]", "[3]"],
    ["[[[]]]", "[[]]"],
    ["[1,[2,[3,[4,[5,6,7]]]],8,9]", "[1,[2,[3,[4,[5,6,0]]]],8,9]"],
  ];
  const day13 = new Day13();
  describe("formatInput", () => {
    it("should return format input", () => {
      expect(day13.formatInput(input)).toEqual(formatedInput);
    });
  });
  describe("checkOrder", () => {
    it("should return true if inputs are in the right order", () => {
      expect(day13.checkOrder(["[1,1,3,1,1]", "[1,1,5,1,1]"]) < 0).toBeTruthy();
      expect(day13.checkOrder(["[[1],[2,3,4]]", "[[1],4]"]) < 0).toBeTruthy();
      expect(
        day13.checkOrder(["[[4,4],4,4]", "[[4,4],4,4,4]"]) < 0
      ).toBeTruthy();
      expect(day13.checkOrder(["[]", "[3]"]) < 0).toBeTruthy();
    });
    it("should return false if inputs are not in the right order", () => {
      expect(day13.checkOrder(["[9]", "[[8,7,6]]"]) < 0).toBeFalsy();
      expect(day13.checkOrder(["[7,7,7,7]", "[7,7,7]"]) < 0).toBeFalsy();
      expect(day13.checkOrder(["[[[]]]", "[[]]"]) < 0).toBeFalsy();
      expect(
        day13.checkOrder([
          "[1,[2,[3,[4,[5,6,7]]]],8,9]",
          "[1,[2,[3,[4,[5,6,0]]]],8,9]",
        ]) < 0
      ).toBeFalsy();
    });
  });
  describe("part1", () => {
    it("should return the sum of the indices of the right order pairs", () => {
      expect(day13.part1(input)).toBe(13);
    });
  });
  describe("part", () => {
    it("should return the decoder key", () => {
      expect(day13.part2(input)).toBe(140);
    });
  });
});
