import { Day12 } from "../src/day12";

describe("day12", () => {
  const input =
    "Sabqponm\n" + "abcryxxl\n" + "accszExk\n" + "acctuvwj\n" + "abdefghi";
  const formatedInput = [
    ["S", "a", "b", "q", "p", "o", "n", "m"],
    ["a", "b", "c", "r", "y", "x", "x", "l"],
    ["a", "c", "c", "s", "z", "E", "x", "k"],
    ["a", "c", "c", "t", "u", "v", "w", "j"],
    ["a", "b", "d", "e", "f", "g", "h", "i"],
  ];
  const day12 = new Day12();
  describe("formatInput", () => {
    it("should return formated input", () => {
      expect(day12.formatInput(input)).toEqual(formatedInput);
    });
  });
  describe("findPosition", () => {
    it("should return position of 'S'", () => {
      expect(day12.findPosition(formatedInput, "S")).toEqual("0#0");
    });
    it("should return position of 'E'", () => {
      expect(day12.findPosition(formatedInput, "E")).toEqual("2#5");
    });
  });
  describe("move", () => {
    it("should return fewest steps required to move from your current position to the location that should get the best signal", () => {
      expect(day12.move(formatedInput)).toBe(31);
    });
  });
  describe("part1", () => {
    it("should return fewest steps required to move from your current position to the location that should get the best signal", () => {
      expect(day12.part1(input)).toBe(31);
    });
  });
});
