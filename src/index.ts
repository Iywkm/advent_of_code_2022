import * as fs from "fs";
import { Day1 } from "./day1";
import { Day2 } from "./day2";
import { Day3 } from "./day3";
import { Day4 } from "./day4";

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
