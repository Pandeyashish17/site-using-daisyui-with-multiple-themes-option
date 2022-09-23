import React from "react";

const MyServices = () => {
  return (
    <>
      <div id="services" className="">
        <div className="container mx-auto">
          {" "}
          <p className="text-4xl font-bold inline text-indigo-600 p-4">
            Services
          </p>{" "}
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-3xl ">What do I offer?</h1>
            <p className=" text-center ">
              My approach to website design is to create a website that
              strengthens your company’s brand while ensuring ease of use and
              simplicity for your audience.
            </p>
          </div>
          <div className="p-5 sm:p-0 flex flex-wrap justify-between">
            {[1, 2, 3, 4, 5, 6].map((item, i) => {
              return (
                <div
                  className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 transition-all duration-300 hover:scale-105 "
                  key={i}
                >
                  <img
                    className="w-10"
                    src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
                    alt=""
                  />
                  <h1 className="font-medium text-lg text-indigo-600 ">
                    UX / UI Design
                  </h1>
                  <p className="">
                    I specialize in creating interactive websites for
                    individuals and small businesses.
                  </p>
                  <a className="text-blue-400 font-semibold text-sm" href="">
                    Read More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyServices;
