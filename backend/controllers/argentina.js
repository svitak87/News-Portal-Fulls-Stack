const axios = require("axios");

const Argentina = async () => {
  try {
    const response = await axios.get(
      `https://newsdata.io/api/1/news?apikey=pub_4343336c50558904fe9ce32bcf1ff8fc78c27&q=Argentina&country=ar`
    );
    const argentinaNews = response.data.results;
    const allNews = argentinaNews.map((item) => ({ // Utiliza map para transformar los datos
        portal: item.source_url.split('').slice(8, item.source_url.length).join(''),
        title: item.title,
        url: item.link,
        description: item.description,
        image: item.image_url,
        publishDate: item.pubDate
    }));
    return allNews; 
  } catch (error) {
    throw error;
  }
};

module.exports = Argentina;
