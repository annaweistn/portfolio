import React from "react";
import Container from "./Container";
import Title from "./Title";
import Button from "./Button";
import ExtraLogos from "./ExtraLogos";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-10 sm:py-16 md:py-20 lg:py-32 xl:py-36"
    >
      <Container className="p-4 lg:p-8 xl:p-12 flex justify-center">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 relative z-10">
          {/* Left side */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="flex flex-col">
              {/* Title for mobile view */}
              <div className="lg:hidden flex items-center mb-4">
                <Title
                  title="Hello World!"
                  className="text-2xl sm:text-3xl lg:text-4xl"
                />
                <img
                  src="/bing.svg"
                  alt="Hero SVG"
                  className="w-24 h-24 sm:w-16 sm:h-16 ml-4"
                />
              </div>
              {/* Title for desktop view */}
              <div className="hidden lg:flex items-center mb-4">
                <Title title="Hello World!" className="text-4xl" />
              </div>
              <div className="mt-4 text-base sm:text-lg md:text-lg lg:text-lg text-gray-600">
                I am a Digital Product Design & Development Student at the HfG
                Schwäbisch Gmünd. Feel free to take a look at my projects and
                send me a message if you have some questions.
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-4">
                <Button
                  variant="solid"
                  color="blue"
                  href="https://www.hfg-gmuend.de/studium/digital-product-design-and-development"
                  className="flex items-center justify-center"
                >
                  <span>University Program</span>
                </Button>
              </div>
              <div className="mt-6 flex justify-center">
                {/* Hier wurde `w-full` entfernt */}
                <ExtraLogos className="w-24 h-24 sm:w-32 sm:h-32" />
              </div>
            </div>
          </div>
          {/* SVG at the bottom of the page */}
          <div className="lg:col-span-5 hidden lg:block absolute bottom-0 right-0 mb-8">
            <img src="/bing.svg" alt="Hero SVG" className="w-full h-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
