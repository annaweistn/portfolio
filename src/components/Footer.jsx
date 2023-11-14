import React from "react";
import { TextField } from "./Fields";
import Button from "./Button";
import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6">
          <p className="text-xs text-gray-500">
            &copy; Copyright {new Date().getFullYear()} Anna Weinstein. All
            rights reserved.
          </p>
          <form className="flex w-full justify-center md:w-auto mt-6 md:mt-0"></form>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
