const request = require("request");
const castle = require("./castle.js").Castle;


castle.getHotels("italy").then(response => {
  const hotels = response;
  Object.entries(hotels).forEach(([key, value]) => console.log(key, value));
});

