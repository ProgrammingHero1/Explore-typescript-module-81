// (null, undefined, any) type, Type Assertions(as)
// Non-null Assertion Operator (Postfix!),
// Optional Chaining(?.),
// Literal Types(value as type),
// Literal Inference(as const),

interface User {
  name: string;
  email: string;
}

// let user: User | null | undefined = null;

// let user = {} as User;

// user = {
//   name: "user",
//   email: "user@example.com",
// };
// user?.email;

interface Description {
  Arif: string;
  John: string;
}
let description: Description = {} as Description;

const friends = ["Arif", "John"] as const;

const user = {
  name: "user",
  email: "user@example.com",
} as const;

friends.forEach((it) => {
  description[it] = it + " on fire";
});
