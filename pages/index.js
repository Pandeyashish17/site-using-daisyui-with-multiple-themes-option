import React from "react";
import Aboutme from "../components/Aboutme";
import GridLayout from "../components/GridImage";
import HeroSection from "../components/HeroSection";
import MyProjects from "../components/MyProjects";
import { useStateContext } from "../context/StateContext";

const Index = () => {
  const { theme } = useStateContext();
  return (
    <>
      <div data-theme={theme}>
        <HeroSection />
        <MyProjects />
        <GridLayout />
        <Aboutme />
      </div>
    </>
  );
};

export default Index;
