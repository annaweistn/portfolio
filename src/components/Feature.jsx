// Feature.jsx
import React from "react";
import Container from "./Container";
import Title from "./Title";
import ImageCard from "./ImageCard";
import DesktopFeature, { FeatureMobile } from "./DesktopFeature";

const Feature = () => {
  const images = [
    {
      src: "/grayi.png",
      alt: "Zeiss Image",
      title: "Fastlane & Zeiss",
      description:
        "Ignite precision in measurement rooms through the Fast Lane initiative, reshaping work conditions for enhanced efficiency.",
    },
    {
      src: "/greeni.png",
      alt: "Wild Image",
      title: "Wildlife Guardian",
      description:
        "Protect your animal herd with an advanced tracking system. Embrace cutting-edge technology for a secure coexistence.",
    },
    {
      src: "/gelbi.png",
      alt: "Another Image",
      title: "Sculpted Realities",
      description:
        "Currently immersed in learning Cinema 4D, passionately bringing my projects to virtual life and unlocking the world of 3D creativity.",
    },
    {
      src: "/tho.png",
      alt: "Another Image",
      title: "TuneCraft Academy",
      description:
        "Discover TuneCraft Academy, a music learning platform. Elevate your skills with interactive lessons and connect with musicians.",
    },
  ];

  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="text-center">
          <Title
            title="Discover What's on My Workbench"
            className="text-white text-2xl sm:text-3xl lg:text-4xl mb-4 mx-auto"
          />
          <p className="text-lg text-gray-400 mx-auto">
            Explore the exciting projects I'm currently working on. From web
            applications to creative designs, I'm passionate about bringing
            innovative ideas to life. Dive into my ongoing work and stay updated
            with the latest developments.
          </p>
        </div>
      </Container>
      {/* Display Images with Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-lg mx-auto mt-8">
        {images.map((image, index) => (
          <ImageCard key={index} {...image} className="mx-auto w-full" />
        ))}
      </div>
    </section>
  );
};

export default Feature;
