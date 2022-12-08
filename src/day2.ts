export class Day2 {
  // rule
  // A: Rock
  // B: Paper
  // C: Scissors
  // X: Rock => 1 point
  // Y: Paper => 2 points
  // Z: Scisors => 3 points

  calcShapeScore = (choise: string): number => {
    switch (choise) {
      case "X":
        return 1;
      case "Y":
        return 2;
      case "Z":
        return 3;
      case "A":
        return 1;
      case "B":
        return 2;
      case "C":
        return 3;
      default:
        return 0;
    }
  };

  calcOutcome = (pair: Array<string>): number => {
    if (
      (pair[0] === "A" && pair[1] === "X") ||
      (pair[0] === "B" && pair[1] === "Y") ||
      (pair[0] === "C" && pair[1] === "Z")
    ) {
      return 3;
    } else if (
      (pair[0] === "A" && pair[1] === "Y") ||
      (pair[0] === "B" && pair[1] === "Z") ||
      (pair[0] === "C" && pair[1] === "X")
    ) {
      return 6;
    }
    return 0;
  };
  calcOutcome2 = (choise: string): number => {
    switch (choise) {
      case "X":
        return 0;
      case "Y":
        return 3;
      case "Z":
        return 6;
      default:
        return 0;
    }
  };
  changeChoise = (pair: Array<string>): string => {
    switch (pair[1]) {
      case "X":
        switch (pair[0]) {
          case "A":
            return "C";
          case "B":
            return "A";
          case "C":
            return "B";
        }
      case "Y":
        switch (pair[0]) {
          case "A":
            return "A";
          case "B":
            return "B";
          case "C":
            return "C";
        }
      case "Z":
        switch (pair[0]) {
          case "A":
            return "B";
          case "B":
            return "C";
          case "C":
            return "A";
        }
      default:
        return "";
    }
  };
  pazzle1 = (input: Array<Array<string>>): number => {
    return input
      .map((pair) => this.calcOutcome(pair) + this.calcShapeScore(pair[1]))
      .reduce((pre, cur) => pre + cur);
  };
  pazzle2 = (input: Array<Array<string>>): number => {
    return input
      .map(
        (pair) =>
          this.calcOutcome2(pair[1]) +
          this.calcShapeScore(this.changeChoise(pair))
      )
      .reduce((pre, cur) => pre + cur);
  };
}
