const axios = require("axios");
const url = "https://www.relaischateaux.com/us/destinations/france";

var Castle = function() {};

Castle.prototype.hello = function() {
  console.log("hello");
};

Castle.prototype.getHotels = function() {
  try {
    return axios.get(url).then(response => {
      const data = response.data;
      var preJson = data.match(/var oMapOptionsdestinationfranceMap = (.*?)<\/script>/ms)[1];
      var map = eval("(" + preJson + ")");
      var markers = map.markers;
      // Object.entries(markers).forEach(([key, value]) => console.log(key, value));
      var json_string = JSON.stringify(markers);
      return JSON.parse(json_string);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Castle = new Castle();
