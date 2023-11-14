import React from "react";
import Container from "./Container";
import Title from "./Title";
import ReviewGrid from "./ReviewGrid";

const Reviews = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        {/* Hier wird das runde Bild eingefügt */}
        <div className="flex items-center mb-4">
          <img
            src="/anni.jpg" // Pfad zu Ihrem Bild im public-Ordner
            alt="Anna's Profile"
            className="w-36 h-36 object-cover rounded-full mr-4" // Hier die Breite und Höhe anpassen
          />
          <Title
            title="Hi there, it's Anna. Get to Know Me"
            id="reviews-title"
            className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
          />
        </div>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Discover my diverse range of interests. From technology to design, I
          am passionate about a variety of subjects.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  );
};

export default Reviews;
