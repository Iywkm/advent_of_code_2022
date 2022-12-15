export class Day10 {
  formatInput = (input: string): string[] => {
    return input.split(/\n/);
  };
  calcScore = (formatedInput: string[]): number[] => {
    let scoreList: number[] = [];
    let X = 1;
    let numOfCircle = 0;
    formatedInput.forEach((input) => {
      const [cmd, num] = input.split(" ");
      if (cmd === "noop") {
        numOfCircle++;
        scoreList.push(X * numOfCircle);
      } else {
        numOfCircle++;
        scoreList.push(X * numOfCircle);
        numOfCircle++;
        scoreList.push(X * numOfCircle);
        X += +num;
      }
    });
    return scoreList;
  };
  part1 = (input: string): number => {
    const formatedInput = this.formatInput(input);
    const scoreList = this.calcScore(formatedInput);
    return scoreList
      .filter((el, idx) => (idx + 1) % 40 === 20)
      .reduce((a, b) => a + b);
  };
}
