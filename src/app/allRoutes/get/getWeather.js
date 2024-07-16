const axios = require("axios");
const config = require("../../../lib/config/config");
const weatherSchema = require("../../../schema/weatherSchema");

module.exports.GetWeather = async (req, res, {}) => {
  try {
    const city = req.query.city;
    if (!city) {
      return res.status(400).send({ message: "city cannot be empty" });
    }
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.weather}&units=metric`
    );
    const temperature = response.data.main.temp;
    const description = response.data.weather[0].description;

    const weather = {
      city,
      temperature,
      description,
    };

    const checkData = await weatherSchema.findOne({ city });
    if (!checkData) {
      await new weatherSchema(weather).save();
      return res.status(200).send(weather);
    } else {
      const newValue = await weatherSchema.findByIdAndUpdate(
        checkData.id,
        weather
      );
      return res.status(200).send(newValue);
    }
  } catch (err) {
    return res.status(500).json({ error: "Unable to fetch weather data" });
  }
};
