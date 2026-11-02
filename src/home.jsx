import React from "react";
import { cn } from "./lib/utils";
// import {  Wave } from "./loading";
// import Page404 from "./page404";

const Home = () => {
  return (
    <div 
    className="pb-56 items-center justify-center">
      <p className={cn(
  "font-garamond font-medium tracking-[-1.68px] text-[55px] mt-[20px] lg:my-0 lg:text-9xl text-center text-shadow-lg text-shadow-neutral-300 dark:text-shadow-neutral-200/20",
  "bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-200"
)}>
  COMPONENTS
</p>
      {/* <h1 className={cn("lg:text-9xl  tracking-tighter text-center font-bold text-shadow-lg text-shadow-neutral-300 dark:text-shadow-neutral-200/20",
         "bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-200")}>
        COMPONENTS
      </h1> */}
      <h2 className="lg:text-md text-sm lg:pb-2 tracking-normal font-light text-center text-neutral-700 dark:text-neutral-300 pb-1">
        That brings intent to every interaction
      </h2>
      <div className=" bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px  md:w-2/4 lg:w-2/4 w-1/2 mx-auto "></div>

      {/* <Page404/> */}
      {/* <TextShimmer duration={1}>Loading...</TextShimmer> */}
      {/* <Wave className="h-14 w-28 text-[#495057] [--duration:700ms]"  />  */}
      
    </div>
       
    
  );
};

export default Home;
