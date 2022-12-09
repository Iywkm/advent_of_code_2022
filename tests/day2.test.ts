import { Day2 } from "../src/day2";

describe("day2", () => {
  const input: Array<Array<string>> = [
    ["A", "Y"],
    ["B", "X"],
    ["C", "Z"],
  ];
  const day2 = new Day2();
  describe("calcShapeScore", () => {
    it("should return 1 if Rock", () => {
      expect(day2.calcShapeScore("X")).toEqual(1);
    });
    it("should return 2 if Paper", () => {
      expect(day2.calcShapeScore("Y")).toEqual(2);
    });
    it("should return 3 if Scissors", () => {
      expect(day2.calcShapeScore("Z")).toEqual(3);
    });
  });
  describe("calcOutcome", () => {
    it("should return 0 if lost", () => {
      expect(day2.calcOutcome(["A", "Z"])).toEqual(0);
    });
    it("should return 3 if draw", () => {
      expect(day2.calcOutcome(["A", "X"])).toEqual(3);
    });
    it("should return 6 if won", () => {
      expect(day2.calcOutcome(["A", "Y"])).toEqual(6);
    });
  });
  describe("puzzle1", () => {
    it("should return total score", () => {
      expect(day2.pazzle1(input)).toEqual(15);
    });
  });
  describe("calcOutcome2", () => {
    it("should return 0 if X", () => {
      expect(day2.calcOutcome2("X")).toEqual(0);
    });
    it("should return 3 if Y", () => {
      expect(day2.calcOutcome2("Y")).toEqual(3);
    });
    it("should return 6 if Z", () => {
      expect(day2.calcOutcome2("Z")).toEqual(6);
    });
  });
  describe("puzzle2", () => {
    it("should return total score", () => {
      expect(day2.pazzle2(input)).toEqual(12);
    });
  });
});
