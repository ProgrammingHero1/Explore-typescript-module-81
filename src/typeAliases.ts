// Explore Type Aliases

// type MyName = "Sojib" | "Saiful";

// let myName: MyName = "Sojib";

// type arr = MyName[];

// const arr: arr = ["Sojib"];

// type Players = [string, string, number, boolean, string];

// let players: Players = ["Messi", "Ronaldo", 3456, true, "Hello"];

// type Add = (num1: number, num2: number, num3?: number) => number;

// const add: Add = (num1, num2, num3 = 0) => {
//   return num1 + num2 + num3;
// };

type Address = {
  presentAddress: string;
  permanentAddress: string;
};

type Favorite = {
  type: "food" | "player" | "singer" | "actor";
  value: string;
};

type Auth = {
  isLoggedIn: boolean;
};

type Person = {
  name: string;
  age?: number;
  phone: string | string[];
  email: string;
  address: Address;
  favorites: Favorite[];
} & Auth;

const person: Person = {
  name: "John",
  email: "john@example.com",
  age: 33,
  phone: ["123"],
  address: {
    presentAddress: "example",
    permanentAddress: "example",
  },
  favorites: [
    {
      type: "food",
      value: "Biriyani",
    },
    {
      type: "player",
      value: "Messi",
    },
  ],
  isLoggedIn: true,
};

if (Array.isArray(person.phone)) {
  person.phone.map((val) => val.toLowerCase());
} else {
  person.phone.toLowerCase();
}
