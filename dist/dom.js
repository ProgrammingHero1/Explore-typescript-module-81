"use strict";
// Explore Dom manipulation in Typescript
const submitBtn = document.getElementById("submit-btn");
const input = document.getElementById("input");
const handleSubmit = (event) => {
    var _a;
    const target = event.target;
    const p = document.createElement("p");
    p.innerText = input === null || input === void 0 ? void 0 : input.value;
    (_a = target === null || target === void 0 ? void 0 : target.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(p);
};
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", handleSubmit);
