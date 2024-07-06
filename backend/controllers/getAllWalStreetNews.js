const axios = require("axios");

const getAllWalStreetNews = async () => {
  try {
    const API_KEY = process.env.API_KEY;
    const allNews = [];

    const response = await axios.get(
      `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`
    );
    const dataNews = response.data.articles;

    dataNews.map((item) => ({
      portal: item.source.name,
      author: item.author,
      title: item.title,
      description: item.description,
      url: item.url,
      image: item.urlToImage,
      publishDate: item.publishedAt,
    }));
    allNews.push(...dataNews);
    return allNews;
  } catch (error) {
    throw error;
  }
};

module.exports = getAllWalStreetNews;
