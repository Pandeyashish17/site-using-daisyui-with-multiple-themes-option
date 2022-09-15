import React from "react";
import Lottie from "react-lottie";
import HeroImage from "../Images/heroImage.json";
const HeroSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HeroImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie
            options={defaultOptions}
            className="max-w-sm rounded-lg shadow-2xl"
          />

          <div>
            <h1 className="text-5xl font-bold">Lorem ipsum dolor sit.</h1>
            <p className="py-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              suscipit totam ad beatae aliquid id repellendus, voluptates fuga
              dolor tenetur.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
