export class Day6 {
  findPositionOfMarker = (input: string, length: number): number => {
    const list = input.split("");
    for (let i = 0; i < list.length; i++) {
      if (new Set(list.slice(i, i + length)).size === length) {
        return i + length;
      }
    }
    return 0;
  };
}
