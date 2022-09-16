import React from "react";

const MyProjects = () => {
  const imgArray = [
    {
      img: "https://source.unsplash.com/random/500x500/?wallpaper,landscape",
    },
    {
      img: "https://source.unsplash.com/random/500x501/?wallpaper,landscape",
    },
    {
      img: "https://source.unsplash.com/random/500x502/?wallpaper,landscape",
    },
    {
      img: "https://source.unsplash.com/random/500x503/?wallpaper,landscape",
    },
    {
      img: "https://source.unsplash.com/random/500x504/?wallpaper,landscape",
    },
    {
      img: "https://source.unsplash.com/random/500x505/?wallpaper,landscape",
    },
    {
      img: "https://source.unsplash.com/random/500x506/?wallpaper,landscape",
    },
    {
      img: "https://source.unsplash.com/random/500x507/?wallpaper,landscape",
    },
  ];
  return (
    <>
      <div class="py-4">
        <div class="container mx-auto">
          <div class="flex flex-col gap-3 items-center">
            <h1 class=" font-bold">PORTFOLIO</h1>
            <h1 class="text-3xl dark:text-white">Works & Projects</h1>
            <p class="w-1/2 text-center ">
              I help designers, small agencies and businesses bring their ideas
              to life. Powered by Figma, VS Code and coffee, I turn your
              requirements into a well-designed websites
            </p>
          </div>

          <div class="p-5 sm:p-0 flex flex-wrap justify-between">
            {imgArray.map((item, i) => {
              return (
                <div
                  class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
                  key={i}
                >
                  <img src={item.img} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
