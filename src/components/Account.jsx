import React from "react";
import Container from "./Container";
import Button from "./Button";
import { accountData } from "@/constants";

const Title = ({ title, className }) => {
  return <h2 className={`text-black ${className}`}>{title}</h2>;
};

// ... (previous imports)

const Account = () => {
  return (
    <section>
      <Container
        id="account"
        aria-label="Features for building a portfolio"
        className="py-20 sm:py-32 mx-auto max-w-6xl relative text-center"
      >
        <Title
          title="Explore My Favorite Projects"
          className="text-2xl sm:text-3xl lg:text-4xl mb-4"
        />
        <p className="text-lg text-black mx-auto mt-8">
          Explore a collection of my favorite projects. These creations hold a
          special place in my portfolio, reflecting my passion and dedication.
          Dive in to learn more about each one.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:grid-cols-2">
          {accountData.map((item) => (
            <div
              key={item.name}
              className="relative flex flex-col rounded-2xl border border-gray-200 p-8 duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                className="h-64 w-full object-cover mx-auto mb-6 rounded-lg mt-8"
                alt={item.name}
              />

              <h3 className="font-semibold text-gray-900 text-center text-xl mb-2">
                {item.name}
              </h3>
              <p className="text-gray-700 text-center">{item.description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <Button
                  variant="solid"
                  color="blue"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Link
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Account;
