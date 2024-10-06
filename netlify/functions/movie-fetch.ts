const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const { query } = JSON.parse(event.body);
  const API_KEY = process.env.OMDB_API_KEY;

  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
};
