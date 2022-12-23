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
  renderCRTImage = (formatedInput: string[]): string => {
    let image: string = "";
    let X = 1;
    let idx = 0;
    const drawPixel = () => {
      idx += 1;
      if (idx >= X && idx <= X + 2) {
        image += "#";
      } else {
        image += ".";
      }
      if (idx % 40 === 0) {
        image += "\n";
        idx = 0;
      }
    };
    formatedInput.forEach((input) => {
      const [cmd, num] = input.split(" ");
      if (cmd === "noop") {
        drawPixel();
      } else {
        drawPixel();
        drawPixel();
        X += +num;
      }
    });
    return image.substring(0, image.length - 1);
  };
  part2 = (input: string): string => {
    const formatedInput = this.formatInput(input);
    const crtImage = this.renderCRTImage(formatedInput);
    return crtImage;
  };
}
