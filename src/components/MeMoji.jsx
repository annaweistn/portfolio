import React from "react";
import MeMojiSVG from "@/images/hey.svg"; // Stelle sicher, dass der Importpfad korrekt ist

const Memoji = () => {
  return (
    <div className="svg-container absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
      <img src={MeMojiSVG} alt="MeMoji" className="w-64 h-64" />
    </div>
  );
};

export default Memoji;
