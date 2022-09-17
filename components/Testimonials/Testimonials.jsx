import React, { useEffect, useState } from "react";

import TestSlider from "./TestSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center pb-14">
          <h2 className=" text-5xl relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What other people say
          </h2>
          
        </div>
        <TestSlider />
      </div>
    </section>
  );
};

export default Testimonials;
