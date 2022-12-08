export class Day1 {
  findMostCalories = (list: Array<number>): number => {
    return Math.max(...list);
  };

  createTotalCalories = (list: Array<Array<number>>): Array<number> => {
    return list.map((listEl) => listEl.reduce((pre, cur) => pre + cur));
  };

  translateList = (input: string): Array<Array<number>> => {
    return input
      .split(/\n{2}/)
      .map((str) => str.split(/\n/).map((str) => Number(str)));
  };

  pazzle1 = (input: string): number => {
    const translatedList = this.translateList(input);
    const totalCaloriesList = this.createTotalCalories(translatedList);
    return this.findMostCalories(totalCaloriesList);
  };

  pazzle2 = (input: string): number => {
    const translatedList = this.translateList(input);
    const totalCaloriesList = this.createTotalCalories(translatedList);
    const sortedList = totalCaloriesList.sort((a, b) => a - b);
    const topThreeTotalList = sortedList.slice(-3);
    return topThreeTotalList.reduce((pre, cur) => pre + cur);
  };
}
