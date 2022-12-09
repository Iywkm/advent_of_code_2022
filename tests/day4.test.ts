import { Day4 } from "../src/day4";

describe("day4", () => {
  const input = "2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8";
  const formatedInput = [
    [
      [2, 4],
      [6, 8],
    ],
    [
      [2, 3],
      [4, 5],
    ],
    [
      [5, 7],
      [7, 9],
    ],
    [
      [2, 8],
      [3, 7],
    ],
    [
      [6, 6],
      [4, 6],
    ],
    [
      [2, 6],
      [4, 8],
    ],
  ];
  const day4 = new Day4();
  describe("formatInput", () => {
    it("should return formated array", () => {
      expect(day4.formatInput(input)).toEqual(formatedInput);
    });
  });
  describe("checkFullContain", () => {
    it("should return true if full contain", () => {
      expect(
        day4.checkFullContain([
          [2, 8],
          [3, 7],
        ])
      ).toBeTruthy();
      expect(
        day4.checkFullContain([
          [2, 7],
          [3, 7],
        ])
      ).toBeTruthy();
      expect(
        day4.checkFullContain([
          [3, 8],
          [3, 7],
        ])
      ).toBeTruthy();
    });
    it("should return false if not full contain", () => {
      expect(
        day4.checkFullContain([
          [5, 7],
          [7, 9],
        ])
      ).toBeFalsy();
      expect(
        day4.checkFullContain([
          [7, 9],
          [5, 7],
        ])
      ).toBeFalsy();
    });
  });
  describe("pazzle1", () => {
    it("should return number of assignment pairs that one range fully contain the other", () => {
      expect(day4.pazzle1(input)).toBe(2);
    });
  });
  describe("checkOverlap", () => {
    it("should return true if overlap", () => {
      expect(
        day4.checkOverlap([
          [2, 8],
          [3, 7],
        ])
      ).toBeTruthy();
      expect(
        day4.checkOverlap([
          [2, 7],
          [3, 7],
        ])
      ).toBeTruthy();
      expect(
        day4.checkOverlap([
          [5, 7],
          [7, 9],
        ])
      ).toBeTruthy();
    });
    it("should return false if not overlap", () => {
      expect(
        day4.checkOverlap([
          [5, 6],
          [7, 9],
        ])
      ).toBeFalsy();
      expect(
        day4.checkOverlap([
          [7, 9],
          [1, 2],
        ])
      ).toBeFalsy();
    });
  });
  describe("pazzle2", () => {
    it("should return number of assignment pairs that the ranges overlapr", () => {
      expect(day4.pazzle2(input)).toBe(4);
    });
  });
});
