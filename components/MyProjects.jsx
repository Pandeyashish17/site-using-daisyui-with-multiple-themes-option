import Link from "next/link";
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
  ];
  return (
    <>
      <div name="work" className="w-full md:h-screen ">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Work
            </p>
            <p className="py-6"> Check out some of my recent work</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {imgArray.map((item, i) => {
              return (
                <div
                  style={{ backgroundImage: `url(${item.img})` }}
                  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" key={i}
                >
                  <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                      Nextjs Application{" "}
                    </span>
                    <div className="pt-8 text-center">
                      <Link href="/">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Demo
                        </button>
                      </Link>
                      <Link href="/">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Code
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;

// const MyProjects = () => {
//
//   return (
//     <>
//       <div class="py-4">
//         <div class="container mx-auto">
//           <div class="flex flex-col gap-3 items-center">
//             <h1 class=" font-bold">PORTFOLIO</h1>
//             <h1 class="text-3xl ">Works & Projects</h1>
//             <p class="w-1/2 text-center ">
//               lorem ipsum
//             </p>
//           </div>

//           <div class="p-5 sm:p-0 flex flex-wrap justify-between">
//             {imgArray.map((item, i) => {
//               return (
//                 <div
//                   class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
//                   key={i}
//                 >
//                   <img src={item.img} />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyProjects;
