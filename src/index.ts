import * as fs from "fs";
import { Day1 } from "./day1";
import { Day10 } from "./day10";
import { Day2 } from "./day2";
import { Day3 } from "./day3";
import { Day4 } from "./day4";
import { Day5 } from "./day5";
import { Day6 } from "./day6";
import { Day7 } from "./day7";
import { Day8 } from "./day8";
import { Day9 } from "./day9";

console.log("----Day1----");
const fileContent = fs.readFileSync("./input/day1.txt", "utf-8");
const day1 = new Day1();
const mostCalories = day1.pazzle1(fileContent);
console.log("most calories: ", mostCalories);

const topThreeTotal = day1.pazzle2(fileContent);
console.log("top three total calories: ", topThreeTotal);

console.log("----Day2----");
const day2Input = fs
  .readFileSync("./input/day2.txt", "utf-8")
  .split(/\n/)
  .map((el) => el.split(/\s/));
const day2 = new Day2();
const totalScore1 = day2.pazzle1(day2Input);
console.log("pazzle1: ", totalScore1);
const totalScore2 = day2.pazzle2(day2Input);
console.log("pazzle2: ", totalScore2);

console.log("----Day3----");
const day3Input = fs.readFileSync("./input/day3.txt", "utf-8");
const day3 = new Day3();
const totalPrioritiesOfItems = day3.pazzle1(day3Input);
console.log("pazzle1: " + totalPrioritiesOfItems);
const totalPrioritiesOfBadges = day3.pazzle2(day3Input);
console.log("pazzle2: " + totalPrioritiesOfBadges);

console.log("----Day4----");
const day4Input = fs.readFileSync("./input/day4.txt", "utf-8");
const day4 = new Day4();
const numberOfFullContainPairs = day4.pazzle1(day4Input);
console.log("pazzle1: " + numberOfFullContainPairs);
const numberOfOverlapPairs = day4.pazzle2(day4Input);
console.log("pazzle2: " + numberOfOverlapPairs);

console.log("----Day5----");
const day5Input = fs.readFileSync("./input/day5.txt", "utf-8");
const day5 = new Day5();
const cratesOnTopOfEachStacks = day5.pazzle1(day5Input);
console.log("pazzle1: " + cratesOnTopOfEachStacks);
const cratesOnTopOfEachStacks9001 = day5.pazzle2(day5Input);
console.log("pazzle2: " + cratesOnTopOfEachStacks9001);

console.log("----Day6----");
const day6Input = fs.readFileSync("./input/day6.txt", "utf-8");
const day6 = new Day6();
const positionOfPacketMarker = day6.findPositionOfMarker(day6Input, 4);
console.log("pazzle1: " + positionOfPacketMarker);
const positionOfMessageMarker = day6.findPositionOfMarker(day6Input, 14);
console.log("pazzle2: " + positionOfMessageMarker);

console.log("----Day7----");
const day7Input = fs.readFileSync("./input/day7.txt", "utf-8");
const day7 = new Day7();
const actionList = day7.formatAction(day7Input);
const fileSystem = day7.parseAction(actionList);
const totalSize = day7.pazzle1(fileSystem);
console.log("pazzle1: " + totalSize);
const deleteDirSize = day7.pazzle2(fileSystem);
console.log("pazzle1: " + deleteDirSize);

console.log("----Day8----");
const day8Input = fs.readFileSync("./input/day8.txt", "utf-8");
const day8 = new Day8();
const numberOfVisibleTrees = day8.pazzle1(day8Input);
console.log("pazzle1: " + numberOfVisibleTrees);
const highestSenicScore = day8.pazzle2(day8Input);
console.log("pazzle2: " + highestSenicScore);

console.log("----Day9----");
const day9Input = fs.readFileSync("./input/day9.txt", "utf-8");
const day9 = new Day9();
const numberOfPosition = day9.part1(day9Input);
console.log("part1: " + numberOfPosition);
const numberOfPosition2 = day9.part2(day9Input);
console.log("part2: " + numberOfPosition2);

console.log("----Day10----");
const day10Input = fs.readFileSync("./input/day10.txt", "utf-8");
const day10 = new Day10();
const totalScore = day10.part1(day10Input);
console.log("part1: " + totalScore);
// const numberOfPosition2 = day10.part2(day10Input);
// console.log("part2: " + numberOfPosition2);
