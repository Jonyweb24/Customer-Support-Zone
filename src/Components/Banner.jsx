// // import React from "React"

// const Banner = ({ inProgress, resolved }) => (
//   <div className="max-w-full h-[150px] flex justify-between  p-4 rounded-lg my-4 mt-10 border-amber-200">
//     <div className=".banner img w-[500px] rounded-sm mt-10 ; relative">
//       {/* <div>
//        <img className="absolute" src="//src/assets/vector1.png" alt="" />
//         </div>
//         */}
//       <p className="text-center font-stretch-50% font-extrabold">
//         In Progress:{" "}
//         <span className="font-semibold text-center">{inProgress}</span>
//       </p>
//     </div>

//     <div className=".banner img w-[500px] rounded-sm mt-10">
//       {/* <div>
//         <img className="absolute" src="//src/assets/vector2.png" alt="" />
//       </div> */}
//       <p className="mr-10 font-stretch-50% font-extrabold">
//         Resolved: <span className="font-semibold text-center">{resolved}</span>
//       </p>
//     </div>
//   </div>
// );

// export default Banner;
// import React from "react";

const Banner = ({ inProgress, resolved }) => (
  <div className="max-w-full h-auto flex flex-col md:flex-row justify-between items-center p-4 rounded-lg my-4 mt-10 border gap-4">
    
    <div className="banner-img w-full md:w-[600px] h-[200px] rounded-lg">
      <p className="text-center font-bold text-base sm:text-lg md:text-xl mt-15 lg:text-2xl">
        In Progress:{" "}
        <span className="font-semibold">{inProgress}</span>
      </p>
    </div>

    
    <div className="banner-img w-full md:w-[600px] h-[200px] rounded-lg">
      <p className="text-center font-bold text-base sm:text-lg md:text-xl mt-15 lg:text-2xl">
        Resolved:{" "}
        <span className="font-semibold">{resolved}</span>
      </p>
    </div>
  </div>
);

export default Banner;
