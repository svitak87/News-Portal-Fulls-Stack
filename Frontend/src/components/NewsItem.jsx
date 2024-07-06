import React from 'react';
import imageLock from '../assets/Logo portafolio.png';

const NewsItem = ({ portal, author, title, description, url, image, publishDate }) => {
  const defaultImage = image ? image : imageLock;
  return (
    <div className="flex flex-col">
      <div className="shadow-md rounded-md p-4 mb-4 w-200 bg-slate-200 ml-5 flex-1 h-64">
        <img src={defaultImage} alt={title} className="h-auto rounded-md mb-2 w-full" />
        <h2 className="text-xl text-black font-extrabold mb-2 max-w-md break-words whitespace-pre-line">{title}</h2>
        <h6 className="text-s font-semi mb-2">Author: {author}</h6>
        <p className="text-gray-600 mb-4 max-w-md break-words whitespace-pre-line">{description}</p>

        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Read more
        </a>
        <p>{portal}</p>
        <p>{publishDate}</p>
      </div>
    </div>
  );
};

export default NewsItem;
