import React from "react";
import { cn } from "./lib/utils";

const Page404 = () => {
  return (
    <div className="items-center justify-center ">
    

      <p
        className={cn(
          "font-inter mt-[20px] text-center text-[120px] font-medium tracking-[-1.68px] text-shadow-lg text-shadow-neutral-300 lg:my-0 lg:text-9xl dark:text-shadow-neutral-200/20",
          "bg-gradient-to-b from-neutral-800 to-neutral-400 bg-clip-text text-transparent dark:from-neutral-100 dark:to-neutral-200",
        )}
      >
        404
      </p>
        <h2 className="lg:text-md pb-1 text-center text-sm font-light tracking-normal text-neutral-700 lg:pb-2 dark:text-neutral-300">
        Something went wrong  
        {/* this code is for sleepy emiji */}
      </h2>
      <div className="mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent md:w-1/4 lg:w-1/4"></div>
    </div>
  );
};

export default Page404;
