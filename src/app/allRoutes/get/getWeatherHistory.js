const weatherSchema = require("../../../schema/weatherSchema");

module.exports.GetWeatherHistory = async (req, res, {}) => {
  try {
    const result = await weatherSchema.find();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).json({ error: "Unable to fetch weather data" });
  }
};
