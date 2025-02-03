import React, { useState } from "react";
import { ProjectImage } from "./ProjectImage";
import classNames from "classnames";

export const Project = ({ alt, src, href, title, desc }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={classNames(
        "border-2 border-[#ece0cb]",
        "rounded-[50px] pb-6 overflow-hidden",
        "hover:border-black hover:shadow-2xl"
      )}
      // style={{ boxShadow: "0px 4px 10px 0px #000;" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={classNames(
          "w-[500px] h-[500px] overflow-hidden",
          hover ? "rounded-0" : "rounded-[50px]"
        )}
      >
        <ProjectImage alt={alt} src={src} href={href} />
        {/* <div className="bg-white w-full h-full"></div> */}
      </div>
      <div className="flex flex-col justify-center mt-[56px]">
        <span className="text-center text-black text-[40px] font-[700]">
          {title}
        </span>
        <span className="text-center text-black text-[24px] font-bold">
          {desc}
        </span>
      </div>
    </div>
  );
};
