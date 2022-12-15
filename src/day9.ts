export type Direction = "R" | "L" | "U" | "D";

export class Day9 {
  formatInput = (input: string): string[] => {
    return input.split(/\n/);
  };

  logTailPosition = (formatedInput: string[]): Set<string> => {
    const tailLog: string[] = [];
    let headPos = "0#0";
    let tailPos = "0#0";
    formatedInput.forEach((cmd) => {
      const [direction, step] = cmd.split(" ");
      let [headX, headY] = headPos.split("#").map((str) => Number(str));
      let [tailX, tailY] = tailPos.split("#").map((str) => Number(str));

      for (let i = 0; i < Number(step); i++) {
        if (direction === "R") headX++;
        else if (direction === "L") headX--;
        else if (direction === "U") headY++;
        else if (direction === "D") headY--;

        let moveX = 0;
        let moveY = 0;

        if (
          Math.abs(headX - tailX) > 1 ||
          (Math.abs(headX - tailX) === 1 && Math.abs(headY - tailY) > 1)
        ) {
          if (headX > tailX) moveX++;
          else moveX--;
        }

        if (
          Math.abs(headY - tailY) > 1 ||
          (Math.abs(headY - tailY) === 1 && Math.abs(headX - tailX) > 1)
        ) {
          if (headY > tailY) moveY++;
          else moveY--;
        }

        tailX += moveX;
        tailY += moveY;

        headPos = [headX, headY].join("#");
        tailPos = [tailX, tailY].join("#");
        tailLog.push(tailPos);
      }
    });
    return new Set(tailLog);
  };
  part1 = (input: string): number => {
    const formatedInput = this.formatInput(input);
    return this.logTailPosition(formatedInput).size;
  };
  logTailPositionOfRope = (formatedInput: string[]): Set<string> => {
    const tailLog: string[] = [];
    const rope = [
      "0#0",
      "0#0",
      "0#0",
      "0#0",
      "0#0",
      "0#0",
      "0#0",
      "0#0",
      "0#0",
      "0#0",
    ];
    const moveRope = (knot1: string, knot2: string, i: number, cmd: string) => {
      let [knot1X, knot1Y] = knot1.split("#").map((str) => Number(str));
      let [knot2X, knot2Y] = knot2.split("#").map((str) => Number(str));

      if (i === 0) {
        if (cmd === "R") knot1X++;
        else if (cmd === "L") knot1X--;
        else if (cmd === "U") knot1Y++;
        else if (cmd === "D") knot1Y--;
      }
      let moveX = 0;
      let moveY = 0;

      if (
        Math.abs(knot1X - knot2X) > 1 ||
        (Math.abs(knot1X - knot2X) === 1 && Math.abs(knot1Y - knot2Y) > 1)
      ) {
        if (knot1X > knot2X) moveX++;
        else moveX--;
      }

      if (
        Math.abs(knot1Y - knot2Y) > 1 ||
        (Math.abs(knot1Y - knot2Y) === 1 && Math.abs(knot1X - knot2X) > 1)
      ) {
        if (knot1Y > knot2Y) moveY++;
        else moveY--;
      }

      knot2X += moveX;
      knot2Y += moveY;

      knot1 = [knot1X, knot1Y].join("#");
      knot2 = [knot2X, knot2Y].join("#");

      rope[i] = knot1;
      rope[i + 1] = knot2;

      if (i === 8) {
        return tailLog.push(knot2);
      }

      moveRope(knot2, rope[i + 2], i + 1, cmd);
    };

    formatedInput.forEach((cmd) => {
      const [direction, step] = cmd.split(" ");

      for (let j = 0; j < Number(step); j++) {
        moveRope(rope[0], rope[1], 0, direction);
      }
    });
    return new Set(tailLog);
  };
  part2 = (input: string): number => {
    const formatedInput = this.formatInput(input);
    return this.logTailPositionOfRope(formatedInput).size;
  };
}
