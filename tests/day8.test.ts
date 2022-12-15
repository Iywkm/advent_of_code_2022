import { Day8 } from "../src/day8";

describe("day8", () => {
  const input = "30373\n25512\n65332\n33549\n35390";
  const treesList = [
    [3, 0, 3, 7, 3],
    [2, 5, 5, 1, 2],
    [6, 5, 3, 3, 2],
    [3, 3, 5, 4, 9],
    [3, 5, 3, 9, 0],
  ];
  const day8 = new Day8();
  describe("countTreesOnTheEdge", () => {
    it("should return number of trees on the edge", () => {
      expect(day8.countTreesOnTheEdge(treesList)).toBe(16);
    });
  });
  describe("countInnerVisibleTrees", () => {
    it("should return number of trees in the interior", () => {
      expect(day8.countInnerVisibleTrees(treesList)).toBe(5);
    });
  });
  describe("pazzle1", () => {
    it("should return number of visible trees", () => {
      expect(day8.pazzle1(input)).toBe(21);
    });
  });
  describe("findHighestScenicScore", () => {
    it("should return highest scenic score", () => {
      expect(day8.findHighestScenicScore(treesList)).toBe(8);
    });
  });
  describe("pazzle2", () => {
    it("should return highest scenic score", () => {
      expect(day8.pazzle2(input)).toBe(8);
    });
  });
});
