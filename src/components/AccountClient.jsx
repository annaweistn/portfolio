// AccountClient.jsx
import React, { useEffect } from "react";

const AccountClient = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".download-image");

    const handleDownloadClick = (itemName) => {
      const fileNames = {
        "HfG Swap": "hfg_swap_download.pdf",
        "Portraits Crafted by AI": "portraits_crafted_by_ai_download.pdf",
        "Interaction Map": "interaction_map_download.pdf",
      };

      const fileName = fileNames[itemName];

      if (fileName) {
        handleDownload(fileName);
      }
    };

    const handleDownload = (fileName) => {
      const downloadRef = document.createElement("a");
      downloadRef.href = `/${fileName}`;
      downloadRef.download = fileName;
      downloadRef.click();
    };

    images.forEach((image) => {
      image.addEventListener("click", () => {
        const itemName = image.getAttribute("data-item-name");
        handleDownloadClick(itemName);
      });
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("click", handleDownloadClick);
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AccountClient;
