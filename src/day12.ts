export class Day12 {
  formatInput = (input: string): string[][] => {
    return input.split("\n").map((str) => str.split(""));
  };
  findPosition = (formatedInput: string[][], char: string): string => {
    let position: string = "";
    for (let i = 0; i < formatedInput.length; i++) {
      for (let j = 0; j < formatedInput[i].length; j++) {
        if (formatedInput[i][j] === char) position = i + "#" + j;
      }
    }
    return position;
  };
  move = (formatedInput: string[][]): number => {
    const rule = "SabcdefghijklmnopqrstuvwxyzE";
    const start = this.findPosition(formatedInput, "S");
    const end = this.findPosition(formatedInput, "E");
    let currentPos: string[] = ["S", start];
    const history: string[] = [];
    while (currentPos[0] !== "E") {
      const [i, j] = currentPos[1].split("#").map((str) => Number(str));
      console.log(i, j);
      console.log(history);
      if (
        formatedInput[i] &&
        formatedInput[i][j + 1] &&
        formatedInput[i][j + 1] === rule[rule.indexOf(currentPos[0]) + 1]
      ) {
        const pos = `${i}#${j + 1}`;
        console.log("pos:", pos);
        if (history.indexOf(pos) === -1) {
          currentPos = [formatedInput[i][j + 1], pos];
          history.push(pos);
          continue;
        }
      }
      if (
        formatedInput[i + 1] &&
        formatedInput[i + 1][j] &&
        formatedInput[i + 1][j] === rule[rule.indexOf(currentPos[0]) + 1]
      ) {
        const pos = `${i + 1}#${j}`;
        console.log("pos:", pos);
        if (history.indexOf(pos) === -1) {
          currentPos = [formatedInput[i + 1][j], pos];
          history.push(pos);
          continue;
        }
      }
      if (
        formatedInput[i] &&
        formatedInput[i][j - 1] &&
        formatedInput[i][j - 1] === rule[rule.indexOf(currentPos[0]) + 1]
      ) {
        const pos = `${i}#${j - 1}`;
        console.log("pos:", pos);
        if (history.indexOf(pos) === -1) {
          currentPos = [formatedInput[i][j - 1], pos];
          history.push(pos);
          continue;
        }
      }
      if (
        formatedInput[i - 1] &&
        formatedInput[i - 1][j] &&
        formatedInput[i - 1][j] === rule[rule.indexOf(currentPos[0]) + 1]
      ) {
        const pos = `${i - 1}#${j}`;
        console.log("pos:", pos);
        if (history.indexOf(pos) === -1) {
          currentPos = [formatedInput[i - 1][j], pos];
          history.push(pos);
          continue;
        }
      }
      if (
        formatedInput[i] &&
        formatedInput[i][j + 1] &&
        formatedInput[i][j + 1] === currentPos[0]
      ) {
        const pos = `${i}#${j + 1}`;
        console.log("pos:", pos);
        if (history.indexOf(pos) === -1) {
          currentPos = [formatedInput[i][j + 1], pos];
          history.push(pos);
          continue;
        }
      }
      if (
        formatedInput[i + 1] &&
        formatedInput[i + 1][j] &&
        formatedInput[i + 1][j] === currentPos[0]
      ) {
        const pos = `${i + 1}#${j}`;
        console.log("pos:", pos);
        if (history.indexOf(pos) === -1) {
          currentPos = [formatedInput[i + 1][j], pos];
          history.push(pos);
          continue;
        }
      }
      if (
        formatedInput[i] &&
        formatedInput[i][j - 1] &&
        formatedInput[i][j - 1] === currentPos[0]
      ) {
        const pos = `${i}#${j - 1}`;
        console.log("pos:", pos);
        if (history.indexOf(pos) === -1) {
          currentPos = [formatedInput[i][j - 1], pos];
          history.push(pos);
          continue;
        }
      }
      if (
        formatedInput[i - 1] &&
        formatedInput[i - 1][j] &&
        formatedInput[i - 1][j] === currentPos[0]
      ) {
        const pos = `${i - 1}#${j}`;
        console.log("pos:", pos);
        if (history.indexOf(pos) === -1) {
          currentPos = [formatedInput[i - 1][j], pos];
          history.push(pos);
          continue;
        }
      }
      console.log(currentPos[0]);
    }
    return history.length;
  };
  part1 = (input: string): number => {
    const heightMap = input
      .split(/\r?\n/)
      .map((row, x) =>
        row.split("").map((height, y) => new MapPoint(x, y, height))
      );
    const shortestPathA = shortestPath(heightMap);
    if (PRINT_ROUTE) {
      // Printing the map with the shortest path marked with red.
      let map = "\n";
      for (const row of heightMap) {
        for (const point of row) {
          if (point.onShortestRoute)
            map += `\x1b[31m${String.fromCharCode(point.height)}\x1b[0m`;
          else map += String.fromCharCode(point.height);
        }
        map += "\n";
      }
      console.log(map);
    }
    return shortestPathA!;
  };
  part2 = (input: string): number => {
    const heightMap = input
      .split(/\r?\n/)
      .map((row, x) =>
        row.split("").map((height, y) => new MapPoint(x, y, height))
      );
    const shortestPathA = shortestPath(heightMap);
    if (shortestPathA && shortestPathA < shortestPathB)
      shortestPathB = shortestPathA;
    if (PRINT_ROUTE) {
      // Printing the map with the shortest path marked with red.
      let map = "\n";
      for (const row of heightMap) {
        for (const point of row) {
          if (point.onShortestRoute)
            map += `\x1b[31m${String.fromCharCode(point.height)}\x1b[0m`;
          else map += String.fromCharCode(point.height);
        }
        map += "\n";
      }
      console.log(map);
    }
    return shortestPathB!;
  };
}

const PRINT_ROUTE = true;

let endPoint: MapPoint | undefined;
class MapPoint {
  public isStart = false;
  public height: number;
  public visited = false;
  public distanceFromDestination = 0;
  // Variables needed only for printing the map.
  public parent?: MapPoint;
  public onShortestRoute = false;

  constructor(public x: number, public y: number, char: string) {
    if (char === "S") {
      this.isStart = true;
      char = "a";
    } else if (char === "E") {
      // Starting from the end.
      this.visited = true;
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      endPoint = this;
      char = "z";
    }
    this.height = char.charCodeAt(0);
  }

  /**
   * Checks if neighbor is achievable from this map point and sets its parameters.
   * @param neighbor mapPoint to which we want to travel from this
   * @param queue - neighbor is added to the queue if we can travel to him
   * @returns true if found destination, false otherwise.
   */
  public processNeighbor(neighbor: MapPoint, queue: MapPoint[]): boolean {
    if (neighbor && !neighbor.visited && this.height - neighbor.height <= 1) {
      if (neighbor.isStart) {
        // Parent is required only for the route printing.
        let parent = this.parent;
        while (parent) {
          parent.onShortestRoute = true;
          parent = parent.parent;
        }
        return true;
      }
      neighbor.visited = true;
      neighbor.distanceFromDestination = this.distanceFromDestination + 1;
      queue.push(neighbor);
      neighbor.parent = this;
    }
    return false;
  }
}

let shortestPathB = -1;
function shortestPath(heightMap: MapPoint[][]) {
  if (endPoint === undefined) {
    throw new Error("There is no start point on the map!");
  }
  const queue = [endPoint];
  for (const point of queue) {
    if (shortestPathB < 0 && point.height === "a".charCodeAt(0))
      shortestPathB = point.distanceFromDestination;
    if (
      point.processNeighbor(heightMap[point.x]?.[point.y + 1], queue) ||
      point.processNeighbor(heightMap[point.x]?.[point.y - 1], queue) ||
      point.processNeighbor(heightMap[point.x + 1]?.[point.y], queue) ||
      point.processNeighbor(heightMap[point.x - 1]?.[point.y], queue)
    )
      return point.distanceFromDestination + 1;
  }
}
