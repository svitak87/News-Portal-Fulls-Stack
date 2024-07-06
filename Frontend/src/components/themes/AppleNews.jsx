import React from "react";
import { useSelector } from "react-redux";
import FullNews from "../FullNews";

const AppleNews = () => {
  const news = useSelector((state) => state.appleNews);
  const appleNews = Array.isArray(news) ? [...news] : [];

  // Dividir el array en dos partes
  const halfLength = Math.ceil(appleNews.length / 2);
  const firstHalf = appleNews.slice(0, halfLength);
  const secondHalf = appleNews.slice(halfLength);

  return (
    <div className="mt-20 flex flex-wrap overflow-hidden mr-10">
      <div className="w-full md:w-1/2 pr-4 box-border">
        <h2 className="text-6xl font-semibold mb-10 ml-10">Tecnología</h2>
        {firstHalf.map((item, index) => (
          <FullNews
            key={index}
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
      <div className="w-full md:w-1/2 pl-4 box-border">
        {secondHalf.map((item, index) => (
          <FullNews
            key={index}
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
    </div>
  );
    
};

export default AppleNews;
