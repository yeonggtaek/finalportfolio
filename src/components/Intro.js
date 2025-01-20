import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Intro = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "I like to Design",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "I like to Development",
        1000,
        "I like to Code",
        1000,
        "I like to Build",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
      className={`font-semibold text-[40px]`}
    />
  );
};
