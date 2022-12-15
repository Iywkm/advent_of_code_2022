export class Day8 {
  countTreesOnTheEdge = (treesList: number[][]): number => {
    return treesList.length * 2 + (treesList[0].length - 2) * 2;
  };
  countInnerVisibleTrees = (treesList: number[][]): number => {
    const visibleTreesList: number[] = [];
    for (let i = 1; i < treesList.length - 1; i++) {
      let treeHeight = treesList[i][0];
      for (let j = 1; j < treesList[i].length - 1; j++) {
        if (treesList[i][j] > treeHeight) {
          const treeId = i * 100 + j;
          treeHeight = treesList[i][j];
          if (visibleTreesList.indexOf(treeId) === -1) {
            visibleTreesList.push(treeId);
          }
        }
      }
      treeHeight = treesList[i][treesList[i].length - 1];
      for (let j = treesList[i].length - 2; j > 0; j--) {
        if (treesList[i][j] > treeHeight) {
          const treeId = i * 100 + j;
          treeHeight = treesList[i][j];
          if (visibleTreesList.indexOf(treeId) === -1) {
            visibleTreesList.push(treeId);
          }
        }
      }
    }
    for (let i = 1; i < treesList[0].length - 1; i++) {
      const list = treesList.map((list) => list[i]);
      let treeHeight = list[0];
      for (let j = 1; j < list.length - 1; j++) {
        if (list[j] > treeHeight) {
          const treeId = i + 100 * j;
          treeHeight = list[j];
          if (visibleTreesList.indexOf(treeId) === -1) {
            visibleTreesList.push(treeId);
          }
        }
      }
      treeHeight = list[list.length - 1];
      for (let j = list.length - 2; j > 0; j--) {
        if (list[j] > treeHeight) {
          const treeId = i + 100 * j;
          treeHeight = list[j];
          if (visibleTreesList.indexOf(treeId) === -1) {
            visibleTreesList.push(treeId);
          }
        }
      }
    }
    return visibleTreesList.length;
  };
  findHighestScenicScore = (treeList: number[][]): number => {
    let highestSenicScore = 0;
    for (let i = 0; i < treeList.length; i++) {
      for (let j = 0; j < treeList[i].length; j++) {
        const leftRightList = treeList[i];
        const upDownList = treeList.map((list) => list[j]);
        let leftScore = 0;
        let rightScore = 0;
        let upScore = 0;
        let downScore = 0;
        for (let k = j - 1; k > -1; k--) {
          leftScore++;
          if (leftRightList[k] >= treeList[i][j]) {
            break;
          }
        }
        for (let k = j + 1; k < leftRightList.length; k++) {
          rightScore++;
          if (leftRightList[k] >= treeList[i][j]) {
            break;
          }
        }
        for (let k = i - 1; k > -1; k--) {
          upScore++;
          if (upDownList[k] >= treeList[i][j]) {
            break;
          }
        }
        for (let k = i + 1; k < upDownList.length; k++) {
          downScore++;
          if (upDownList[k] >= treeList[i][j]) {
            break;
          }
        }
        const scenicScore = leftScore * rightScore * upScore * downScore;
        if (scenicScore > highestSenicScore) {
          highestSenicScore = scenicScore;
        }
      }
    }
    return highestSenicScore;
  };
  pazzle1 = (input: string): number => {
    const treesList = input
      .split("\n")
      .map((str) => str.split("").map((str) => Number(str)));
    const numberOIfVisibleTrees =
      this.countTreesOnTheEdge(treesList) +
      this.countInnerVisibleTrees(treesList);
    return numberOIfVisibleTrees;
  };
  pazzle2 = (input: string): number => {
    const treesList = input
      .split("\n")
      .map((str) => str.split("").map((str) => Number(str)));
    return this.findHighestScenicScore(treesList);
  };
}
