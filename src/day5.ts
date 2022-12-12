export class Day5 {
  formatStacks = (input: string): Array<Array<string>> => {
    const stacksStringList = input.split(/\n{2}/)[0].split(/\n/);
    stacksStringList.pop();
    const stacks: Array<Array<string>> = [];
    for (let i = 0; i < (stacksStringList[0].length - 2) / 4; i++) {
      stacks.push([]);
      stacksStringList.forEach((str) => {
        if (str[i * 4 + 1] !== " ") {
          stacks[i].push(str[i * 4 + 1]);
        }
      });
    }
    return stacks;
  };
  formatProcesure = (input: string): Array<Array<number>> => {
    return input
      .split(/\n{2}/)[1]
      .split(/\n/)
      .map((str) =>
        str
          .split(" ")
          .filter((str, idx) => idx % 2 !== 0)
          .map((str) => Number(str))
      );
  };
  rearrangementStacks9000 = (
    stacks: Array<Array<string>>,
    procedures: Array<Array<number>>
  ): Array<Array<string>> => {
    procedures.forEach((pros) => {
      stacks[pros[1] - 1].splice(0, pros[0]).forEach((crate) => {
        stacks[pros[2] - 1].unshift(crate);
      });
    });
    return stacks;
  };
  pickupTopCrates = (stacks: Array<Array<string>>): string => {
    return stacks.map((stack) => stack[0]).join("");
  };
  pazzle1 = (input: string): string => {
    const stacks = this.formatStacks(input);
    const procesures = this.formatProcesure(input);
    return this.pickupTopCrates(
      this.rearrangementStacks9000(stacks, procesures)
    );
  };
  rearrangementStacks9001 = (
    stacks: Array<Array<string>>,
    procedures: Array<Array<number>>
  ): Array<Array<string>> => {
    procedures.forEach((pros) => {
      stacks[pros[2] - 1].unshift(...stacks[pros[1] - 1].splice(0, pros[0]));
    });
    return stacks;
  };
  pazzle2 = (input: string): string => {
    const stacks = this.formatStacks(input);
    const procesures = this.formatProcesure(input);
    return this.pickupTopCrates(
      this.rearrangementStacks9001(stacks, procesures)
    );
  };
}
