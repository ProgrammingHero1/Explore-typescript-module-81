// Primitive Types(string, number and boolean),
// unionTypes and how inferred types in typescript.

// let myName: string;
// myName = "Sojib";

// myName = "Saiful";

// myName = 55
// myName = false

// let age: number;
// age = 34;

// age = '56';

let hasGf: boolean = false;
// hasGf = 2435

let age: number | string | boolean | [] = 56;

age = "45";
age = false;
age = [];
// age = {}

// const myName: "Sojib"  = "Sojib";

let myName: "Sojib" | "Saiful" = "Sojib";
myName = "Saiful";
