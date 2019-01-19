const axios = require("axios");
const url = "https://www.relaischateaux.com/us/destinations/";

var Castle = function() {};

Castle.prototype.hello = function() {
  console.log("hello");
};

Castle.prototype.getHotels = function(destination) {
  try {
    destination = destination.toLowerCase();
    return axios.get(url+destination).then(response => {
      const data = response.data;
      var preJson = data.match(/var oMapOptionsdestination.+Map = (.*?)<\/script>/ms)[1];
      var map = eval("(" + preJson + ")");
      var markers = map.markers;
      var json_string = JSON.stringify(markers);
      return JSON.parse(json_string);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Castle = new Castle();
