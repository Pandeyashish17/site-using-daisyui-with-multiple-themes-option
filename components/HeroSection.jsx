import React from "react";
import Lottie from "react-lottie";
import HeroImage from "../Images/70242-man-working.json";
import Link from "next/link";
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
      <div className=" w-full ">
        <div className="w-[80vw] xs:pt-8 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold ">
              {` Hi I'm Ashish ,Full Stack Developer`}
            </h2>
            <p className=" py-4 max-w-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              perferendis quos cupiditate, numquam pariatur aperiam beatae
              doloremque explicabo laborum hic.
            </p>
          </div>

          <div>
            <Lottie
              options={defaultOptions}
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
