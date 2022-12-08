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
      default:
        return 0;
    }
  };

  calcOutcome = (pair: [string, string]): number => {
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
  pazzle1 = (input: Array<Array<string>>): number => {
    return 0;
  };
}
