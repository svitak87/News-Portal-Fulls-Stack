import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAppleNews,
  getAllTeslaNews,
  getAllUsBussinessNews,
  getAllTechCrunchNews,
  getWallStreetJournalNews,
  getWorldNews,
  getDollarRates,
  getArgentinaNews,
} from "../../redux/actions";
import AllNews from "./AllNews";
import DollarRates from "./DollarRates";
import Weatherdate from "./Weatherdate";
import FullNews from "./FullNews";
import Advertisement from "./Advertisement";

const Portal = () => {
  const dispatch = useDispatch();
  const mainNews = useSelector((state) => state.argentinaNews);

  useEffect(() => {
    dispatch(getAllAppleNews());
    dispatch(getAllTeslaNews());
    dispatch(getAllUsBussinessNews());
    dispatch(getAllTechCrunchNews());
    dispatch(getWallStreetJournalNews());
    dispatch(getWorldNews());
    dispatch(getDollarRates());
    dispatch(getArgentinaNews());
  }, [dispatch]);

  const firstNews = mainNews.length > 0 ? mainNews[5] : null;

  return (
    <div>
      <div className="relative">
        <Link to="/contacto">
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 absolute top-4 right-4 mt-24">
            Sugerencias
          </button>
        </Link>
      </div>
      <div>
        <DollarRates />
      </div>
      <h1 className="text-5xl font-extrabold mt-5 ml-10">
        Principales noticias:
      </h1>
      <div className="mt-10 flex flex-wrap">
        {firstNews && (
          <div className="flex flex-row">
            <FullNews
              portal={firstNews.portal}
              author={firstNews.author}
              title={firstNews.title}
              description={firstNews.description}
              url={firstNews.url}
              image={firstNews.image}
              publishDate={firstNews.publishDate}
            />
            <Weatherdate />
            <Advertisement />
          </div>
        )}
      </div>
      <div>
        <AllNews />
      </div>
    </div>
  );
};

export default Portal;
