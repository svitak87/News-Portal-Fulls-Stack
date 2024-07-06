const axios = require('axios');

const getAllUsBussiness = async () => {
    const API_KEY = process.env.API_KEY;
  try {
    const allNews = [];
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
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
    return allNews
  } catch (error) {
    throw error;
  }
}

module.exports = getAllUsBussiness;