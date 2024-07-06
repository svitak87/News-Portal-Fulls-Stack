import React from "react";
import { useSelector } from "react-redux";
import NewsItem from "./NewsItem";


const AllNews = () => {
  const newsData = [
    { news: useSelector((state) => state.appleNews), title: "Tecnología" },
    { news: useSelector((state) => state.argentinaNews), title: "Argentina" },
    { news: useSelector((state) => state.usBusiness), title: "Negocios en Estados Unidos" },
    {
      news: useSelector((state) => state.worldNews),
      title: "Mundo"
    },
    {
      news: useSelector((state) => state.wallStreetJournal),
      title: "Wall Street Journal",
    },
  ];
 
  const argentinaNews = useSelector((state) => state.argentinaNews);

  const firstNewsArgentina = argentinaNews.length > 0 ? argentinaNews[0] : null;

  return (
    <div className="mt-10 flex flex-wrap">
      {newsData.map((data, index) => {
        const slicedNews = Array.isArray(data.news)
          ? data.news.slice(2, 3)
          : [];
        return (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-4 mb-4"
          >
            <h2 className="text-lg font-semibold mb-2 ml-10">{data.title}</h2>
            {slicedNews.map((item, idx) => (
              <NewsItem
                key={idx}
                portal={item.portal}
                author={item.author}
                title={item.title}
                description={item.description}
                url={item.url}
                image={item.image}
                publishDate={item.publishDate}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default AllNews;
