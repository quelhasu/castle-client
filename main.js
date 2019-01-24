const request = require("request");
const castle = require("./castle.js").Castle;
const firebase = require('firebase');
const serviceAccount = require("./serviceAccountKey.json");


if(!firebase.apps.length) {
  let config = serviceAccount;
firebase.initializeApp(config);
}

const db = firebase.database();




// castle.getHotels("france").then(response => {
//   const hotels = response;
//   Object.entries(hotels).forEach(([key, value]) =>{
//     if(value.name.includes("Anne de Bretagne")){
//       console.log(key, value)
//     }
//     // console.log(key, value);
//   });
// });

castle.getHotels("france", db);

// db.goOffline();
