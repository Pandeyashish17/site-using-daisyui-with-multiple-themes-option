import React from "react";
import Body from "../components/Body";
import HeroSection from "../components/HeroSection";
import { useStateContext } from "../context/StateContext";

const index = () => {
  const { theme } = useStateContext();
  return (
    <>
      <div data-theme={theme}>
        <HeroSection />
        <Body />
      </div>
    </>
  );
};

export default index;
