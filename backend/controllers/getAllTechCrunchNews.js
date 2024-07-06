const axios = require("axios");

const getAllTechCrunchNews = async () => {
  const API_KEY = process.env.API_KEY;
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
    );
    const allNews = [];

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

    allNews.push(...dataNews)
    return allNews;
  } catch (error) {
    throw error;
  }
};

module.exports = getAllTechCrunchNews;
