export class Day4 {
  formatInput = (input: string): Array<Array<Array<number>>> => {
    return input
      .split(/\n/)
      .map((str) =>
        str.split(",").map((str) => str.split("-").map((str) => Number(str)))
      );
  };
  checkFullContain = (pair: Array<Array<number>>): boolean => {
    if (pair[0][0] < pair[1][0]) {
      if (pair[0][1] < pair[1][1]) {
        return false;
      }
    } else if (pair[0][0] > pair[1][0]) {
      if (pair[0][1] > pair[1][1]) {
        return false;
      }
    }
    return true;
  };
  checkOverlap = (pair: Array<Array<number>>): boolean => {
    if (pair[0][1] < pair[1][0] || pair[0][0] > pair[1][1]) {
      return false;
    }
    return true;
  };
  pazzle1 = (input: string): number => {
    const fullContainList = this.formatInput(input).filter((pair) =>
      this.checkFullContain(pair)
    );
    return fullContainList.length;
  };
  pazzle2 = (input: string): number => {
    const fullContainList = this.formatInput(input).filter((pair) =>
      this.checkOverlap(pair)
    );
    return fullContainList.length;
  };
}
