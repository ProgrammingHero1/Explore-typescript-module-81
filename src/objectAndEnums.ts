// Object and Enums in typescript

let player: {
  name: string;
  age?: number;
  country: string;
  married: boolean;
  clubs?: string[];
};

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

player.age = player.age! + 5;

player.clubs = player.clubs?.map((club) => club.toUpperCase());

// console.log(player, player.country, player["clubs"]);

enum Friends {
  Arif = 10,
  Kalam = 15,
  Salam = 20,
  Balam = 30,
}

enum Configs {
  API_Key = "api_key",
  Domain_Name = "domain_name",
}

// console.log(Configs.API_Key);
