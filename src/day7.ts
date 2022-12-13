export interface File {
  type: "file";
  name: string;
  size: number;
}

export interface Directory {
  type: "directory";
  name: string;
  size: number;
  children: (Directory | File)[];
}

export type Command = string;
export type Path = string | undefined;
export type Input = [Command, Path];

export class Day7 {
  formatAction = (input: string): string[] => {
    return input.slice(2 - input.length).split("\n$ ");
  };
  changeDirectory = (
    currentDir: string[],
    fileSystem: Directory
  ): Directory => {
    let dir = fileSystem;
    if (currentDir.length > 1) {
      for (const level of currentDir) {
        if (level === "/") {
          continue;
        }
        dir = dir.children.filter((e) => e.name === level)[0] as Directory;
      }
    }
    return dir;
  };
  parseAction = (actionList: string[]): Directory => {
    let currentDir = ["/"];
    const fileSystem: Directory = {
      type: "directory",
      name: "/",
      size: 0,
      children: [],
    };
    for (const action of actionList) {
      const formatedAction = action.split("\n");
      const [command, path] = formatedAction.shift()?.split(" ") as Input;
      if (command === "cd" && path) {
        if (path === "/") {
          currentDir = ["/"];
        } else if (path === "..") {
          currentDir.pop();
        } else {
          currentDir.push(path);
        }
      } else {
        const dir = this.changeDirectory(currentDir, fileSystem);
        for (const item of formatedAction) {
          const [info, name] = item.split(" ");
          if (info === "dir") {
            dir.children.push({
              type: "directory",
              name: name,
              size: 0,
              children: [],
            });
          } else {
            dir.children.push({
              type: "file",
              name: name,
              size: Number(info),
            });
            const allDir = [...currentDir];
            while (allDir.length > 0) {
              this.changeDirectory(allDir, fileSystem).size += Number(info);
              allDir.pop();
            }
          }
        }
      }
    }
    return fileSystem;
  };
  pazzle1 = (fileSystem: Directory): number => {
    let totalSize = 0;
    const checkDirSize = (dir: Directory) => {
      if (dir.size <= 100000) {
        totalSize += dir.size;
      }
      for (const item of dir.children) {
        if (item.type === "directory") {
          checkDirSize(item);
        }
      }
    };
    checkDirSize(fileSystem);
    return totalSize;
  };
  pazzle2 = (fileSystem: Directory): number => {
    const leastDeleteSize = fileSystem.size - 40000000;
    const dirList: number[] = [];
    const checkDirSize = (dir: Directory) => {
      if (dir.size >= leastDeleteSize) {
        dirList.push(dir.size);
      }
      for (const item of dir.children) {
        if (item.type === "directory") {
          checkDirSize(item);
        }
      }
    };
    checkDirSize(fileSystem);
    return dirList.sort((a, b) => a - b)[0];
  };
}
