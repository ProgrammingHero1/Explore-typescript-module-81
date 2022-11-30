// // Explore Interfaces and
// // Difference between Type Alias and Interface

// // interface Person {
// //   name: string;
// //   email: string;
// // }

// // let person: Person = {
// //   name: "John",
// //   email: "john@example.com",
// // };
// interface Add {
//   (num1: number, num2: number, num3?: number): number;
// }

// const add: Add = (num1, num2, num3 = 0) => {
//   return num1 + num2 + num3;
// };

// interface Address {
//   presentAddress: string;
//   permanentAddress: string;
// }

// interface Favorite {
//   type: "food" | "player" | "singer" | "actor";
//   value: string;
// }

// interface Auth {
//   isLoggedIn: boolean;
// }

// interface Person extends Auth {
//   name: string;
//   age?: number;
//   phone: string | string[];
//   email: string;
//   address: Address;
//   favorites?: Favorite[];
// }

// const person: Person = {
//   name: "John",
//   email: "john@example.com",
//   age: 33,
//   phone: ["123"],
//   address: {
//     presentAddress: "example",
//     permanentAddress: "example",
//   },
//   favorites: [
//     {
//       type: "food",
//       value: "Biriyani",
//     },
//     {
//       type: "player",
//       value: "Messi",
//     },
//   ],
//   isLoggedIn: true,
// };
