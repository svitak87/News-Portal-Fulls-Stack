const axios = require('axios');

const getWorldNews = async () => {
    const API_KEY = process.env.API_KEY_GNEWS;
    const allNews = [];
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${API_KEY}`
      );
      const data = response.data.articles;
      const news = data.map((item) => ({
        author: item.source.name,
        title: item.title,
        description: item.description,
        url: item.url,
        image: item.image,
        publishDate: item.publishedAt,
      }));
      allNews.push(...news);
      return allNews
    } catch (error) {
      throw error;
    }
}

module.exports = getWorldNews