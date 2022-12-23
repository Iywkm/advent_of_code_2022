import { Day11, Monkey } from "../src/day11";

describe("day11", () => {
  const input =
    "Monkey 0:\n  Starting items: 79, 98\n  Operation: new = old * 19\n  Test: divisible by 23\n    If true: throw to monkey 2\n    If false: throw to monkey 3\n\nMonkey 1:\n  Starting items: 54, 65, 75, 74\n  Operation: new = old + 6\n  Test: divisible by 19\n    If true: throw to monkey 2\n    If false: throw to monkey 0\n\nMonkey 2:\n  Starting items: 79, 60, 97\n  Operation: new = old * old\n  Test: divisible by 13\n    If true: throw to monkey 1\n    If false: throw to monkey 3\n\nMonkey 3:\n  Starting items: 74\n  Operation: new = old + 3\n  Test: divisible by 17\n    If true: throw to monkey 0\n    If false: throw to monkey 1";
  const formatedInput = [
    {
      id: 0,
      items: [79, 98],
      operation: ["*", "19"],
      testNum: 23,
      throwAddress: [2, 3],
    },
    {
      id: 1,
      items: [54, 65, 75, 74],
      operation: ["+", "6"],
      testNum: 19,
      throwAddress: [2, 0],
    },
    {
      id: 2,
      items: [79, 60, 97],
      operation: ["*", "old"],
      testNum: 13,
      throwAddress: [1, 3],
    },
    {
      id: 3,
      items: [74],
      operation: ["+", "3"],
      testNum: 17,
      throwAddress: [0, 1],
    },
  ];

  const day11 = new Day11();
  describe("formatInput", () => {
    it("should return formated inpput", () => {
      expect(day11.formatInput(input)).toEqual(formatedInput);
    });
  });
  describe("inspect", () => {
    it("should return item that Monkey inspects", () => {
      expect(day11.inspect(79, ["*", "19"], 0)).toBe(500);
    });
  });
  describe("monkeyThrow", () => {
    it("should return the level of monkey bussiness", () => {
      const input = formatedInput.map((monkey) => monkey as Monkey);
      expect(day11.monkeyThrow(input, [0, 0, 0, 0])).toEqual([2, 4, 3, 5]);
    });
  });
  describe("part1", () => {
    it("should return the level of monkey bussiness after 20 rounds", () => {
      expect(day11.part1(input)).toEqual(10605);
    });
  });
  describe("part2", () => {
    it("should return the level of monkey bussiness after 10000 rounds", () => {
      expect(day11.part2(input)).toEqual(2713310158);
    });
  });
});
