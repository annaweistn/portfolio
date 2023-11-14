import React from "react";
import CircleBackground from "./CircleBackground";
import Container from "./Container";
import Title from "./Title";

const CallToAction = () => {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <Title
            title="What I Care About!"
            className="text-3xl text-white sm:text-4xl"
          />
          <p className="mt-4 text-lg text-gray-300">
            My university journey has sharpened my teamwork skills and fostered
            a strong sense of collaboration. I'm also dedicated to
            sustainability, making sure our projects not only thrive but also
            make a positive, eco-friendly impact. Let's work together for
            success and a greener future.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
