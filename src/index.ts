import * as fs from "fs";
import { Day1 } from "./day1";

const fileContent = fs.readFileSync("./input/day1.txt", "utf-8");
const day1 = new Day1();
const mostCalories = day1.pazzle1(fileContent.split(/\n/));
console.log("most calories", mostCalories);

const topThreeTotal = day1.pazzle2(fileContent.split(/\n/));
console.log("top three total calories", topThreeTotal);
