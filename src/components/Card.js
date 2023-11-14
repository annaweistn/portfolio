import React from "react";

const CustomCard = ({ title, content }) => {
  return (
    <div className="bg-gray-700 p-6 mb-8 rounded-lg">
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-lg text-white">{content}</p>
    </div>
  );
};

export default CustomCard;
