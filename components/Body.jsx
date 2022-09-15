import React from "react";

const Body = () => {
  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 sm:w-full md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3   gap-5">
        {[1, 2, 3, 4, 5, 6].map((item, i) => {
          return (
            <div className="card w-96 glass" key={i}>
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Lorem, ipsum dolor Lorem, ipsum .
                </h2>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read more!</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Body;
