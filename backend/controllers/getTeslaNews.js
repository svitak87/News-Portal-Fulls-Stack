const axios = require("axios");

const getTeslaNews = async () => {
  const API_KEY = process.env.API_KEY;
  const allNews = [];
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-03-30&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    const data = response.data.articles;
    const news = data.map((item) => ({
      portal: item.source.name,
      author: item.author,
      title: item.title,
      description: item.description,
      url: item.url,
      image: item.urlToImage,
      publishDate: item.publishedAt,
    }));
    allNews.push(...news);
    console.log(allNews)
    return allNews
  } catch (error) {
    throw error;
  }
};

module.exports = getTeslaNews;
