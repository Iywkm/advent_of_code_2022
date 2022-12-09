export class Day3 {
  arrangeItems = (input: string): Array<Array<string>> => {
    return input.split(/\n/).map((str) => {
      const length = str.length;
      return [str.slice(0, length / 2), str.slice(length / 2, length)];
    });
  };
  pickupCommonItem = (rucksack: Array<string>): string => {
    for (let i = 0; i < rucksack[0].length; i++) {
      if (rucksack[1].indexOf(rucksack[0][i]) > -1) {
        return rucksack[0][i];
      }
    }
    return "";
  };
  convertItemToPriority = (item: string): number => {
    const items = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return items.indexOf(item);
  };
  pazzle1 = (input: string): number => {
    return this.arrangeItems(input)
      .map((rucksack) => this.pickupCommonItem(rucksack))
      .map((item) => this.convertItemToPriority(item))
      .reduce((a, b) => a + b);
  };
  separateGroups = (input: string): Array<Array<string>> => {
    const list = input.split(/\n/);
    const separatedGroup = [];
    for (let i = 0; i < list.length; i += 3) {
      separatedGroup.push(list.slice(i, i + 3));
    }
    return separatedGroup;
  };
  pickupCommonBadge = (rucksack: Array<string>): string => {
    for (let i = 0; i < rucksack[0].length; i++) {
      if (
        rucksack[1].indexOf(rucksack[0][i]) > -1 &&
        rucksack[2].indexOf(rucksack[0][i]) > -1
      ) {
        return rucksack[0][i];
      }
    }
    return "";
  };
  pazzle2 = (input: string): number => {
    return this.separateGroups(input)
      .map((rucksack) => this.pickupCommonBadge(rucksack))
      .map((item) => this.convertItemToPriority(item))
      .reduce((a, b) => a + b);
  };
}
