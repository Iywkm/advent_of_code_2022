export class Day13 {
  formatInput = (input: string): string[][] => {
    return input.split(/\n{2}/).map((str) => str.split("\n"));
  };

  compareValue = (left: any, right: any): number => {
    if (typeof left === "number" && typeof right === "number") {
      if (left < right) return -1;
      if (left === right) return 0;
      if (left > right) return 1;
    }
    if (Array.isArray(left) && Array.isArray(right)) {
      const nl = left.length;
      const nr = right.length;
      let i = 0;
      for (const n = Math.min(nl, nr); i < n; ++i) {
        const c = this.compareValue(left[i], right[i]);
        if (c) return c;
      }
      return nl < nr ? -1 : nl > nr ? 1 : 0;
    }
    if (typeof left === "number" && Array.isArray(right)) {
      return this.compareValue([left], right);
    }
    if (Array.isArray(left) && typeof right === "number") {
      return this.compareValue(left, [right]);
    }
    throw new Error(`invalid comparison: ${left} vs. ${right}`);
  };

  checkOrder = (pair: string[]): number => {
    const [left, right] = pair.map((str) => JSON.parse(str));
    return this.compareValue(left, right);
  };
  part1 = (input: string): number => {
    const formatedInput = this.formatInput(input);
    const rightOrderPairsList: number[] = [];
    for (let i = 1; i <= formatedInput.length; i++) {
      if (this.checkOrder(formatedInput[i - 1]) < 0)
        rightOrderPairsList.push(i);
    }
    return rightOrderPairsList.reduce((a, b) => a + b);
  };
  part2 = (input: string): number => {
    const formatedInput: any[] = [];
    this.formatInput(input).forEach((pair) => {
      const [left, right] = pair.map((str) => JSON.parse(str));
      formatedInput.push(left, right);
    });
    formatedInput.push([[2]], [[6]]);
    formatedInput.sort(this.compareValue);
    const orderedPackets = formatedInput.map((packet) =>
      JSON.stringify(packet)
    );
    return (
      (orderedPackets.indexOf("[[2]]") + 1) *
      (orderedPackets.indexOf("[[6]]") + 1)
    );
  };
}
