const axios = require("axios");
const url = "https://www.relaischateaux.com/us/destinations/";
var cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const date = require("date-and-time");

var Castle = function() {};

Castle.prototype.hello = function() {
  console.log("hello");
};

Castle.prototype.getHotels2 = function(destination) {
  try {
    destination = destination.toLowerCase();
    return axios.get(url + destination).then(response => {
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

Castle.prototype.getHotels = function(destination) {
  try {
    destination = destination.toLowerCase();
    var hotel_url = url + destination;

    (async () => {
      const browser = await puppeteer.launch({ headless: true, timeout: 0 });
      const page = await browser.newPage();

      // Get hotels of the 5th pages
      for (let index = 1; index < 5; index++) {
        console.log("[#] Getting links... from " + hotel_url + "?page=" + index);  
        await page.goto(hotel_url + "?page=" + index, { waitUntil: "load" });
        await page.waitForSelector(".hotelQuickView");

        const hotels_links = await page.evaluate(selector => {
          const anchors_node_list = document.querySelectorAll(selector);
          const anchors = [...anchors_node_list];
          return anchors.map(link => link.href);
        }, "#destinationResults > div > div > div > h3 > a");

        console.log("[#] Done getting links\n");

        // Iterate through hotels of current page
        for(let i = 0; i < hotels_links.length; i++) {
          let link = hotels_links[i];
          console.log("\n\t[#] Trying link " + link);

          await page.goto(link, {waitUntil:"load"});

          // Get restaurant link
          const restaurant_link = await page.evaluate(selector => {
            return document.querySelector(selector).href;
          }, "body > div.jsSecondNav.will-stick > ul > li > a[data-id*='isRestaurant']");
          await page.goto(restaurant_link, {waitUntil:"load"});

          // Get restaurant name
          const restaurant_name = await page.evaluate(selector => {
            return document.querySelector(selector).innerText;
          }, "div > div.row.hotelTabsHeader > div:nth-child(1) > div.hotelTabsHeaderTitle > h3");

          console.log(restaurant_name);
        }

        hotel_url = page.url().match(/.*\/[^?]+/);
      }
      await browser.close();
    })();
  } catch (error) {
    console.log(error);
  }
};

exports.Castle = new Castle();
