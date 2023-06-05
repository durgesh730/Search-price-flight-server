// router.js
const Amadeus = require("amadeus");
const express = require("express");

// Create router
const router = express.Router();
// Create Amadeus API client
const amadeus = new Amadeus({
  clientId:"9wwSuGHE5nCIH7j2JJcpFtt7nrHpbw8G",
  clientSecret: "LUXTAJIR8AVDuE4s",
});

router.get("/api/search", async (request, response) => {
  try {
    const { query } = request;
    console.log(query);
    const { data } = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: query.origin,
      destinationLocationCode: query.destination,
      departureDate: query.departureDate,
      adults: query.adults,
      children: query.children,
      infants: query.infants,
      travelClass: query.travelClass,
      ...(query.returnDate ? { returnDate: query.returnDate } : {}),
    });
    response.json(data);
  } catch (error) {
    console.error(error.response);
    response.json([]);
  }
});

router.get("/api/autocomplete", async (request, response) => {
  try {
    const { query } = request;
    console.log(query)
    const data  = await amadeus.referenceData.locations.get({
      keyword: query.keyword,
      subType: Amadeus.location.city,
    });
    response.json(data);
  } catch (error) {
    console.error(error.response);
    response.json([]);
  }
});

module.exports = router;
