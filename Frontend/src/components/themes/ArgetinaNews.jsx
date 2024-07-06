import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FullNews from "../FullNews";
import { useDispatch } from "react-redux";
import { getArgentinaNews } from "../../../redux/actions";
const ArgentinaNews = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.argentinaNews);
  const argentinaNews = Array.isArray(news) ? [...news] : [];

  const halfLength = Math.ceil(argentinaNews.length / 2);
  const firstHalf = argentinaNews.slice(0, halfLength);
  const secondHalf = argentinaNews.slice(halfLength);

  useEffect(() => {
    dispatch(getArgentinaNews());
  }, [dispatch]);

  return (
    <div className="mt-20 flex flex-wrap overflow-hidden mr-10">
      <div className="w-full md:w-1/2 pr-4 box-border">
        <h2 className="text-6xl font-semibold mb-10 ml-10">Argentina</h2>
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

export default ArgentinaNews;
