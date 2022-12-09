import { Day3 } from "../src/day3";

describe("day3 part1", () => {
  const input: string =
    "vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw";
  const day3 = new Day3();
  describe("arrangeItems", () => {
    it("should return list of arranged rucksack items", () => {
      const arrangedItems = [
        ["vJrwpWtwJgWr", "hcsFMMfFFhFp"],
        ["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"],
        ["PmmdzqPrV", "vPwwTWBwg"],
        ["wMqvLMZHhHMvwLH", "jbvcjnnSBnvTQFn"],
        ["ttgJtRGJ", "QctTZtZT"],
        ["CrZsJsPPZsGz", "wwsLwLmpwMDw"],
      ];
      expect(day3.arrangeItems(input)).toEqual(arrangedItems);
    });
  });
  describe("pickupCommonItem", () => {
    it("should return item in both compartments", () => {
      const rucksack1 = ["vJrwpWtwJgWr", "hcsFMMfFFhFp"];
      const rucksack2 = ["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"];
      const rucksack3 = ["PmmdzqPrV", "vPwwTWBwg"];
      const rucksack4 = ["wMqvLMZHhHMvwLH", "jbvcjnnSBnvTQFn"];
      const rucksack5 = ["ttgJtRGJ", "QctTZtZT"];
      const rucksack6 = ["SrZsJsPPZsGz", "wwsLwLmpwMDw"];

      expect(day3.pickupCommonItem(rucksack1)).toBe("p");
      expect(day3.pickupCommonItem(rucksack2)).toBe("L");
      expect(day3.pickupCommonItem(rucksack3)).toBe("P");
      expect(day3.pickupCommonItem(rucksack4)).toBe("v");
      expect(day3.pickupCommonItem(rucksack5)).toBe("t");
      expect(day3.pickupCommonItem(rucksack6)).toBe("s");
    });
  });
  describe("convertItemToPriority", () => {
    it("should return correct priority", () => {
      expect(day3.convertItemToPriority("p")).toBe(16);
      expect(day3.convertItemToPriority("L")).toBe(38);
      expect(day3.convertItemToPriority("P")).toBe(42);
      expect(day3.convertItemToPriority("v")).toBe(22);
      expect(day3.convertItemToPriority("t")).toBe(20);
      expect(day3.convertItemToPriority("s")).toBe(19);
    });
  });
  describe("pazzle1", () => {
    it("should return the sum of the priorities of item in  in both compartments", () => {
      expect(day3.pazzle1(input)).toBe(157);
    });
  });
  describe("separeteGroups", () => {
    it("should return list of separated three-Elf groups", () => {
      const separatedGroup = [
        [
          "vJrwpWtwJgWrhcsFMMfFFhFp",
          "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
          "PmmdzqPrVvPwwTWBwg",
        ],
        [
          "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
          "ttgJtRGJQctTZtZT",
          "CrZsJsPPZsGzwwsLwLmpwMDw",
        ],
      ];
      expect(day3.separateGroups(input)).toEqual(separatedGroup);
    });
  });
  describe("pickupCommonBadge", () => {
    it("should return item in both compartments", () => {
      const group1 = [
        "vJrwpWtwJgWrhcsFMMfFFhFp",
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
        "PmmdzqPrVvPwwTWBwg",
      ];
      const group2 = [
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
        "ttgJtRGJQctTZtZT",
        "CrZsJsPPZsGzwwsLwLmpwMDw",
      ];

      expect(day3.pickupCommonBadge(group1)).toBe("r");
      expect(day3.pickupCommonBadge(group2)).toBe("Z");
    });
  });
  describe("pazzle2", () => {
    it("should return the sum of the priorities of the badges of each three-Elf group", () => {
      expect(day3.pazzle2(input)).toBe(70);
    });
  });
});
