"use client";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-row gap-2 bg-slate-400 bg-opacity-20 rounded-lg w-60 h-32 p-3  items-center justify-center">
      <div className="text-center w-1/2 border-slate-400 border-r-2 py-10">
        About
      </div>
      <div className="text-center ">Test your Harry Potter knowledge</div>
    </div>
  );
};

export default About;
