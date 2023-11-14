import React from "react";

const AccountItem = ({ title, description, imageSrc }) => {
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imageSrc}
          alt={title}
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold leading-8 mb-1">{title}</h2>
          <p className="text-base leading-6 text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountItem;
