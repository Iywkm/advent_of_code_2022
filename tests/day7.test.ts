import { Day7, Directory } from "../src/day7";

describe("day7", () => {
  const input =
    "$ cd /\n$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k";
  const actionlist = [
    "cd /",
    "ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d",
    "cd a",
    "ls\ndir e\n29116 f\n2557 g\n62596 h.lst",
    "cd e",
    "ls\n584 i",
    "cd ..",
    "cd ..",
    "cd d",
    "ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k",
  ];
  const fileSystem: Directory = {
    type: "directory",
    name: "/",
    size: 48381165,
    children: [
      {
        type: "directory",
        name: "a",
        size: 94853,
        children: [
          {
            type: "directory",
            name: "e",
            size: 584,
            children: [
              {
                type: "file",
                name: "i",
                size: 584,
              },
            ],
          },
          {
            type: "file",
            name: "f",
            size: 29116,
          },
          {
            type: "file",
            name: "g",
            size: 2557,
          },
          {
            type: "file",
            name: "h.lst",
            size: 62596,
          },
        ],
      },
      {
        type: "file",
        name: "b.txt",
        size: 14848514,
      },
      {
        type: "file",
        name: "c.dat",
        size: 8504156,
      },
      {
        type: "directory",
        name: "d",
        size: 24933642,
        children: [
          {
            type: "file",
            name: "j",
            size: 4060174,
          },
          {
            type: "file",
            name: "d.log",
            size: 8033020,
          },
          {
            type: "file",
            name: "d.ext",
            size: 5626152,
          },
          {
            type: "file",
            name: "k",
            size: 7214296,
          },
        ],
      },
    ],
  };
  const day7 = new Day7();
  describe("formatAction", () => {
    it("should return action list", () => {
      expect(day7.formatAction(input)).toEqual(actionlist);
    });
  });
  describe("parseAction", () => {
    it("should return fileSystem", () => {
      day7.parseAction(actionlist);
      expect(day7.parseAction(actionlist)).toEqual(fileSystem);
    });
  });
  describe("pazzle1", () => {
    it("should return the sum of the total sizes of the directories with a total size of at most 100000", () => {
      expect(day7.pazzle1(fileSystem)).toBe(95437);
    });
  });
  describe("pazzle2", () => {
    it("should return the total size of that directory", () => {
      expect(day7.pazzle2(fileSystem)).toBe(24933642);
    });
  });
});
