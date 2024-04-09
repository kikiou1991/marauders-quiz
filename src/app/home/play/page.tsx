import CardContainer from "@/components/cards";
import React from "react";

const Play = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 w-full items-center h-screen  justify-center ">
        <h1 className="text-5xl">Pick a difficulty</h1>
        <div className="flex flex-row gap-5 mt-5 hover:cursor-pointer">
          <CardContainer name={"Easy"} />
          <CardContainer name={"Hard"} />
        </div>
      </div>
    </div>
  );
};

export default Play;
