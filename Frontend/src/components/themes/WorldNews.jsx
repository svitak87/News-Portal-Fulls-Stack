import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorldNews } from "../../../redux/actions";
import FullNews from "../FullNews";

const WorldNews = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.worldNews);
  const worldNews = Array.isArray(news) ? [...news] : [];

  const halfLength = Math.ceil(worldNews.length / 2);
  const firstHalf = worldNews.slice(0, halfLength);
  const secondHalf = worldNews.slice(halfLength);

  useEffect(() => {
    dispatch(getWorldNews());
  }, [dispatch]);
  
  return (
    <div className="mt-20 flex flex-wrap overflow-hidden mr-10">
      <div className="w-full md:w-1/2 pr-4 box-border">
        <h2 className="text-6xl font-semibold mb-10 ml-10">World News</h2>
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

export default WorldNews;
