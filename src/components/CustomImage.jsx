import React from "react";
import pdf from "@/images/logos/pdf1.png";

const CustomImage = ({ src, alt }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="h-64 w-64 mx-auto mb-6 object-cover rounded-lg"
      />
      <img
        src={pdf}
        alt="Default Alt Text"
        className="h-64 w-64 mx-auto mb-6 object-cover rounded-lg"
      />
    </div>
  );
};

export default CustomImage;
