require("dotenv").config()

module.exports = {
  port: process.env.PORT || 3001,
  mongoDB: process.env.MONGODB_URI,
  weather: process.env.WEATHER_KEY,
};