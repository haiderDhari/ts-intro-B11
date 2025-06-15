function sumA(arr: number[]): number {
  return arr.reduce((acc: number, curr: number) => acc + curr ,0);
}

let exampleAr:  number[] = [1, 2, 3];
console.log(sumA(exampleAr));