import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Intro = () => {
  return (
    <TypeAnimation
      sequence={[
        "I like to Design",
        1000,
        "I like to Build",
        1000,
        "I like to Marketing",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block", color: "#0F4C81" }}
      repeat={Infinity}
      className={`font-semibold text-[30px] max-xl:text-base`}
    />
  );
};
