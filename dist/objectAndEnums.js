"use strict";
// Object and Enums in typescript
var _a;
let player;
player = {
    name: "Messi",
    age: 35,
    country: "Argentina",
    married: true,
    clubs: ["Barcelona"],
};
player = {
    name: "Neymar",
    // age: 30,
    country: "Brazil",
    married: false,
    //   clubs: ["Barcelona"],
};
player.married = false;
player.age = player.age + 5;
player.clubs = (_a = player.clubs) === null || _a === void 0 ? void 0 : _a.map((club) => club.toUpperCase());
// console.log(player, player.country, player["clubs"]);
var Friends;
(function (Friends) {
    Friends[Friends["Arif"] = 10] = "Arif";
    Friends[Friends["Kalam"] = 15] = "Kalam";
    Friends[Friends["Salam"] = 20] = "Salam";
    Friends[Friends["Balam"] = 30] = "Balam";
})(Friends || (Friends = {}));
var Configs;
(function (Configs) {
    Configs["API_Key"] = "api_key";
    Configs["Domain_Name"] = "domain_name";
})(Configs || (Configs = {}));
// console.log(Configs.API_Key);
