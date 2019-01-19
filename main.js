const request = require("request");
const castle = require("./castle.js").Castle;


castle.getHotels().then(response => {
  const hotels = response;
  console.log(hotels);
});

