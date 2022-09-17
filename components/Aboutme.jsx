import React from "react";
import profileImage from "../Images/1786-profile.json";
import Lottie from "react-lottie";

const Aboutme = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: profileImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div id="about" className="px-10 ">
        <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className="relative">
            <div className="h-full rounded-lg  overflow-hidden">
              <img
                src="https://source.unsplash.com/random/500x650/?man"
                alt=""
              />
            </div>
          </div>
          <div className="my-auto flex flex-col gap-3">
            <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
            <h1 className="text-3xl font-medium ">Better Design</h1>
            <h1 className="text-3xl font-medium ">Better Experience</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur voluptatum voluptatibus quae voluptas doloribus
              sapiente dolorum tempore quia, blanditiis fugit delectus nobis.
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
