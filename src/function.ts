// Function Types(parameter, return, anonymous/callback,
// function signature, optional parameter/default parameter)

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// add(10, 30);

// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// const result = add(10, 30);

// const add = function (num1: number, num2: number): number {
//   return num1 + num2;
// };

// const result = add(10, 30);

// const add = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// const result = add(10, 30);

// const add = function (num1: number[], num2: number): number {
//   return num1[0] + num2;
// };

// const result = add([10], 30);

// const add = (num1: number, num2: number, num3: number): number => {
//   return num1 + num2 + num3;
// };

// const result = add(10, 30, 10);

// const add = (num1: number, num2: number, num3: number = 0): number => {
//   return num1 + num2 + num3;
// };

// const result = add(10, 30);

// const add = (...numbers: number[]): number => {
//   const func = (pre: number, cur: number) => pre + cur;
//   return numbers.reduce(func, 0);
// };

// const result = add(10, 30, 324, 54, 45);

// let add: (num1: number, num2: number, num3?: number) => number;
// add = (num1, num2, num3 = 0) => {
//   return num1 + num2 + num3;
// };

// let add: Function;
// add = (num1: number, num2: number, num3 = 0) => {
//   return num1 + num2 + num3;
// };

// const result = add(10, 30);

// console.log(result);
