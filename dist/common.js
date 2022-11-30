"use strict";
// (null, undefined, any) type, Type Assertions(as)
// Non-null Assertion Operator (Postfix!),
// Optional Chaining(?.),
// Literal Types(value as type),
// Literal Inference(as const),
let description = {};
const friends = ["Arif", "John"];
const user = {
    name: "user",
    email: "user@example.com",
};
friends.forEach((it) => {
    description[it] = it + " on fire";
});
