import React from "react";
const Aboutme = () => {
  return (
    <>
      <h1 className="text-center text-5xl font-bold p-10 "> About me</h1>
      <div className="flex items-center justify-center p-10">
        <div className="overflow-hidden  aspect-video cursor-pointer rounded-xl relative group">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute inset-x-0 -bottom-2   flex items-end">
            <div>
              <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                <div className="font-bold">Ashish Pandey</div>

                <div className="opacity-60 text-sm ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi beatae mollitia dolore. Voluptatem ut inventore
                  exercitationem maxime delectus doloribus excepturi eum illo
                  dolorem perferendis quae dolor, et totam? Nobis, quo.
                </div>
                <button className="btn btn-primary btn-outline btn-accent">
                  See More!
                </button>
              </div>
            </div>
          </div>
          <img
            alt=""
            className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1031&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFufHx8fHx8MTY2MzI0MDA0NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=686"
            width={200}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

export default Aboutme;
