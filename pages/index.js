import React from "react";
import Aboutme from "../components/Aboutme";
import HeroSection from "../components/HeroSection";
import MyProjects from "../components/MyProjects";
import MyServices from "../components/MyServices";
import { useStateContext } from "../context/StateContext";
import Testimonials from "../components/Testimonials/Testimonials";
const Index = () => {
  const { theme } = useStateContext();
  return (
    <>
      <div data-theme={theme}>
        <HeroSection />
        <Aboutme />
        <MyProjects />
        <MyServices />
        <Testimonials />
      </div>
    </>
  );
};

export default Index;
