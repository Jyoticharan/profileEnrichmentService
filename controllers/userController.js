const axios = require("axios");
const cheerio = require("cheerio");

exports.enrichUserProfile = async (req, res) => {
  try {
    const { username, email, profileUrl } = req.body;

    if (!username || !email || !profileUrl) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const response = await axios.get(profileUrl);
    const $ = cheerio.load(response.data);
    const fullName = $("h1").first().text().trim();

    const enrichedProfile = {
      username,
      email,
      fullName,
      sourceProfile: profileUrl,
    };

    return res.status(201).json(enrichedProfile);
  } catch (err) {
    return res.status(500).json({ error: "Error scraping or processing data" });
  }
};
