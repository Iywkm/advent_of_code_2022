export interface Monkey {
  id: number;
  items: number[];
  operation: Operation;
  testNum: number;
  throwAddress: number[];
}

export interface BigMonkey {
  id: number;
  items: BigInt[];
  operation: Operation;
  testNum: number;
  throwAddress: number[];
}

export type Operation = [Sign, Arg];

export type Sign = "+" | "*";

export type Arg = string;

export class Day11 {
  formatInput = (input: string): Monkey[] => {
    const formatedInput = input
      .split("\n\n")
      .map((str) => str.split("\n").map((str) => str.split(" ")))
      .map((list) => {
        return {
          id: Number(list[0][1][0]),
          items: list[1].slice(4).map((str) => Number(str.replace(",", ""))),
          operation: [list[2][6] as Sign, list[2][7]] as Operation,
          testNum: Number(list[3][5]),
          throwAddress: [Number(list[4][9]), Number(list[5][9])],
        };
      });
    return formatedInput;
  };
  formatInput2 = (input: string): BigMonkey[] => {
    const formatedInput = input
      .split("\n\n")
      .map((str) => str.split("\n").map((str) => str.split(" ")))
      .map((list) => {
        return {
          id: Number(list[0][1][0]),
          items: list[1].slice(4).map((str) => BigInt(str.replace(",", ""))),
          operation: [list[2][6] as Sign, list[2][7]] as Operation,
          testNum: Number(list[3][5]),
          throwAddress: [Number(list[4][9]), Number(list[5][9])],
        };
      });
    return formatedInput;
  };
  inspect = (item: number, operation: Operation, modulo: number): number => {
    const [sign, arg] = operation;
    if (modulo) {
      if (arg === "old") {
        if (sign === "*") return (item * item) % modulo;
        else return (item * 2) % modulo;
      } else {
        const num = Number(arg);
        if (sign === "*") return (item * num) % modulo;
        else return (item + num) % modulo;
      }
    } else {
      if (arg === "old") {
        if (sign === "*") return Math.floor((item * item) / 3);
        else return Math.floor((item * 2) / 3);
      } else {
        const num = Number(arg);
        if (sign === "*") return Math.floor((item * num) / 3);
        else return Math.floor((item + num) / 3);
      }
    }
  };
  monkeyThrow = (
    formatedInput: Monkey[],
    monkeyLevel: number[],
    modulo = 0
  ): number[] => {
    formatedInput.forEach((monkey) => {
      const length = monkey.items.length;
      for (let i = 0; i < length; i++) {
        const item = monkey.items.shift();
        if (item) {
          const inspectedItem = this.inspect(item, monkey.operation, modulo);
          monkeyLevel[monkey.id]++;
          if (inspectedItem % monkey.testNum === 0) {
            formatedInput[monkey.throwAddress[0]].items.push(inspectedItem);
          } else {
            formatedInput[monkey.throwAddress[1]].items.push(inspectedItem);
          }
        }
      }
    });
    return monkeyLevel;
  };
  part1 = (input: string): number => {
    const formatedInput = this.formatInput(input);
    let monkeyLevel = formatedInput.map((mon) => 0);
    for (let i = 0; i < 20; i++) {
      this.monkeyThrow(formatedInput, monkeyLevel);
    }
    return monkeyLevel
      .sort((a, b) => b - a)
      .slice(0, 2)
      .reduce((a, b) => a * b);
  };
  part2 = (input: string): number => {
    const formatedInput = this.formatInput(input);
    const modulo = formatedInput
      .map((mon) => mon.testNum)
      .reduce((a, b) => a * b);
    let monkeyLevel: number[] = formatedInput.map((mon) => 0);
    for (let i = 1; i <= 10000; i++) {
      this.monkeyThrow(formatedInput, monkeyLevel, modulo);
    }
    return monkeyLevel
      .sort((a, b) => b - a)
      .slice(0, 2)
      .reduce((a, b) => a * b);
  };
}
