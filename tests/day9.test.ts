import { Day9, Direction } from "../src/day9";

describe("day9", () => {
  const input = "R 4\nU 4\nL 3\nD 1\nR 4\nD 1\nL 5\nR 2";
  const input2 = "R 5\nU 8\nL 8\nD 3\nR 17\nD 10\nL 25\nU 20\n";
  const formatedInput: string[] = [
    "R 4",
    "U 4",
    "L 3",
    "D 1",
    "R 4",
    "D 1",
    "L 5",
    "R 2",
  ];
  const formatedInput2: string[] = [
    "R 5",
    "U 8",
    "L 8",
    "D 3",
    "R 17",
    "D 10",
    "L 25",
    "U 20",
  ];

  const tailLog: Set<string> = new Set([
    "0#0",
    "1#0",
    "2#0",
    "3#0",
    "4#1",
    "4#2",
    "4#3",
    "3#4",
    "2#4",
    "3#3",
    "3#2",
    "2#2",
    "1#2",
  ]);
  const tailLog2: Set<string> = new Set([
    "0#0",
    "1#1",
    "2#2",
    "1#3",
    "2#4",
    "3#5",
    "4#5",
    "5#5",
    "6#4",
    "7#3",
    "8#2",
    "9#1",
    "10#0",
    "9#-1",
    "8#-2",
    "7#-3",
    "6#-4",
    "5#-5",
    "4#-5",
    "3#-5",
    "2#-5",
    "1#-5",
    "0#-5",
    "-1#-5",
    "-2#-5",
    "-3#-4",
    "-4#-3",
    "-5#-2",
    "-6#-1",
    "-7#0",
    "-8#1",
    "-9#2",
    "-10#3",
    "-11#4",
    "-11#5",
    "-11#6",
  ]);

  const day9 = new Day9();
  describe("formatInput", () => {
    it("should return formated input", () => {
      expect(day9.formatInput(input)).toEqual(formatedInput);
    });
  });

  describe("logTailPosition", () => {
    it("should return positions log that tail visited", () => {
      expect(day9.logTailPosition(formatedInput)).toEqual(tailLog);
    });
  });
  describe("part1", () => {
    it("should return number of positions that the tail of the rope visit at least once", () => {
      expect(day9.part1(input)).toEqual(tailLog.size);
    });
  });
  describe("logTailPositionOfRope", () => {
    it("should return positions log that tail visited", () => {
      expect(day9.logTailPositionOfRope(formatedInput2)).toEqual(tailLog2);
    });
  });
  describe("part2", () => {
    it("should return number of positions that the tail of the rope visit at least once", () => {
      expect(day9.part2(input2)).toEqual(tailLog2.size);
    });
  });
});
