import React from 'react'
import imageLock from '../assets/Logo portafolio.png'


const FullNews = ({portal, author, title, description, url, image, publishDate}) => {
  const defaultImage = image ? image : imageLock;
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 ml-10 w-full" style={{ width: "100%" }}>
      <img
        src={defaultImage}
        alt={title}
        className="h-auto rounded-md mb-2"
        style={{ width: "100%", height: "auto" }} 
      />
      <h2 className="text-5xl text-black font-black mb-2 max-w-md break-words whitespace-pre-line">{title}</h2>
      <h6 className="text-s font-semi mb-2">Author: {author}</h6>
      <p className="text-gray-600 mb-4 max-w-md break-words whitespace-pre-line">{description}</p>
  
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Read more
      </a>
      <p>{portal}</p>
      <p>{publishDate}</p>
    </div>
  );
  
}

export default FullNews
