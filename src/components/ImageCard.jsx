// ImageCard.jsx
import React from "react";

const ImageCard = ({ src, alt, title, description }) => {
  return (
    <div className="max-w-sm h-full overflow-hidden shadow-md flex flex-col justify-center items-center mx-auto my-auto bg-gray-800 mb-8 rounded-lg text-center px-4">
      <img src={src} alt={alt} className="w-1/2 h-auto rounded-t-lg mx-auto" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
