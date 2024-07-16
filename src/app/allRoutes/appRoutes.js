const expres = require("express");
const { GetWeather } = require("./get/getWeather");
const { GetWeatherHistory } = require("./get/getWeatherHistory");
const routes = expres.Router();

const path = "/api/v1/";
routes
  .get(`${path}get-weather`, GetWeather)
  .get(`${path}get-weather-history`, GetWeatherHistory);

module.exports = routes;
