import { Day6 } from "../src/day6";

describe("day6", () => {
  const input1 = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
  const input2 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
  const input3 = "nppdvjthqldpwncqszvftbrmjlhg";
  const input4 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
  const input5 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";

  const day6 = new Day6();
  describe("findPositionMarker", () => {
    it("should return position that the first-of-packet(length is 4) marker is detected", () => {
      expect(day6.findPositionOfMarker(input1, 4)).toBe(7);
      expect(day6.findPositionOfMarker(input2, 4)).toBe(5);
      expect(day6.findPositionOfMarker(input3, 4)).toBe(6);
      expect(day6.findPositionOfMarker(input4, 4)).toBe(10);
      expect(day6.findPositionOfMarker(input5, 4)).toBe(11);
    });
    it("should return position that the first-of-message(length is 14) marker is detected", () => {
      expect(day6.findPositionOfMarker(input1, 14)).toBe(19);
      expect(day6.findPositionOfMarker(input2, 14)).toBe(23);
      expect(day6.findPositionOfMarker(input3, 14)).toBe(23);
      expect(day6.findPositionOfMarker(input4, 14)).toBe(29);
      expect(day6.findPositionOfMarker(input5, 14)).toBe(26);
    });
  });
});
