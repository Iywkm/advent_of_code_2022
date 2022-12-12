import { Day5 } from "../src/day5";

describe("day5", () => {
  const input =
    "    [D]    \n[N] [C]    \n[Z] [M] [P]\n 1   2   3 \n\nmove 1 from 2 to 1\nmove 3 from 1 to 3\nmove 2 from 2 to 1\nmove 1 from 1 to 2";
  const formatedProcesure = [
    [1, 2, 1],
    [3, 1, 3],
    [2, 2, 1],
    [1, 1, 2],
  ];
  const rearrangementedStack = [["C"], ["M"], ["Z", "N", "D", "P"]];
  const cratesOnTopOfEachStacks = "CMZ";
  const rearrangementedStack9001 = [["M"], ["C"], ["D", "N", "Z", "P"]];
  const day5 = new Day5();
  describe("formatStacks", () => {
    it("should return formated stacks of crates)", () => {
      const formatedStacks = [["N", "Z"], ["D", "C", "M"], ["P"]];
      expect(day5.formatStacks(input)).toEqual(formatedStacks);
    });
  });
  describe("formatProcesure", () => {
    it("should return formated rearrangement procedure)", () => {
      expect(day5.formatProcesure(input)).toEqual(formatedProcesure);
    });
  });
  describe("rearrangementStacks9000", () => {
    it("should return rearrangemented stacks", () => {
      const formatedStacks = [["N", "Z"], ["D", "C", "M"], ["P"]];
      expect(
        day5.rearrangementStacks9000(formatedStacks, formatedProcesure)
      ).toEqual(rearrangementedStack);
    });
  });
  describe("pickupTopCrates", () => {
    it("should return crates on top of each stack", () => {
      expect(day5.pickupTopCrates(rearrangementedStack)).toBe(
        cratesOnTopOfEachStacks
      );
    });
  });
  describe("pazzle1", () => {
    it("should rearrangement stacks & return crates on top of each stack", () => {
      expect(day5.pazzle1(input)).toBe(cratesOnTopOfEachStacks);
    });
  });
  describe("rearrangementStacks9001", () => {
    it("should return new rearrangemented stacks", () => {
      const formatedStacks = [["N", "Z"], ["D", "C", "M"], ["P"]];
      expect(
        day5.rearrangementStacks9001(formatedStacks, formatedProcesure)
      ).toEqual(rearrangementedStack9001);
    });
  });
  describe("pazzle2", () => {
    it("should rearrangement stacks by 9001 & return crates on top of each stack", () => {
      expect(day5.pazzle2(input)).toBe("MCD");
    });
  });
});
