"use strict";
// project setup
const message = "Hello Typescript";
const message2 = "Tata Javascript";
// console.log(message, message2, language);
const useState = (initialValue) => {
    let state = initialValue;
    const setter = (value) => {
        state = value;
    };
    return [state, setter];
};
const [count, setCount] = useState({});
