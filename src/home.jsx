import React from "react";
import { cn } from "./lib/utils";

const Home = () => {
  return (
    <div className="pb-56 items-center justify-center">
      <h1 className={cn("text-9xl tracking-tighter text-center font-bold text-shadow-lg text-shadow-neutral-300 dark:text-shadow-neutral-200/20",
         "bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-200")}>
        COMPONENTS
      </h1>
      <h2 className="text-md tracking-normal font-light text-center text-neutral-700 dark:text-neutral-300 pb-1">
        That brings intent to every interaction
      </h2>
      <div className=" bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-0.5 w-2/4 mx-auto "></div>
    </div>
  );
};

export default Home;
