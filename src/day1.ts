export class Day1 {
  findMostCalories = (list: Array<number>): number => {
    return Math.max(...list);
  };

  createTotalCalories = (list: Array<Array<number>>): Array<number> => {
    return list.map((listEl) => listEl.reduce((pre, cur) => pre + cur));
  };

  translateList = (list: Array<string>): Array<Array<number>> => {
    let result: Array<Array<number>> = [[]];
    let count = 0;
    list.forEach((el) => {
      if (el !== "") {
        result[count].push(Number(el));
      } else {
        result.push([]);
        count++;
      }
    });
    return result.filter((list) => list.length !== 0);
  };

  pazzle1 = (list: Array<string>): number => {
    const translatedList = this.translateList(list);
    const totalCaloriesList = this.createTotalCalories(translatedList);
    return this.findMostCalories(totalCaloriesList);
  };

  pazzle2 = (list: Array<string>): number => {
    const translatedList = this.translateList(list);
    const totalCaloriesList = this.createTotalCalories(translatedList);
    const sortedList = totalCaloriesList.sort((a, b) => a - b);
    const topThreeTotalList = sortedList.slice(-3);
    return topThreeTotalList.reduce((pre, cur) => pre + cur);
  };
}
