"use strict";
function sumA(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
let exampleAr = [1, 2, 3];
console.log(sumA(exampleAr));
