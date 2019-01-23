const request = require("request");
const castle = require("./castle.js").Castle;


// castle.getHotels("france").then(response => {
//   const hotels = response;
//   Object.entries(hotels).forEach(([key, value]) =>{
//     if(value.name.includes("Anne de Bretagne")){
//       console.log(key, value)
//     }
//     // console.log(key, value);
//   });
// });

castle.getHotels("germany");
