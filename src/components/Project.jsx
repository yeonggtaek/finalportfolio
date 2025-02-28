import React, { useState } from "react";
import { ProjectImage } from "./ProjectImage";
import classNames from "classnames";

export const Project = ({ alt, src, href, title, desc }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={classNames(
        "mt-[70] max-xl:mt-5",
        "border-2 border-[#ece0cb]",
        "rounded-[50px] max-xl:rounded-[30px] pb-6 overflow-hidden",
        "hover:border-black hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]",
        "transition-transform duration-300 ease-in-out",
        hover ? "-translate-y-5" : "translate-y-0"
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={classNames(
          "w-[500px] h-[500px] overflow-hidden",
          "max-xl:w-[250px] max-xl:h-[250px]",
          hover ? "rounded-0" : "rounded-[50px] max-xl:rounded-[30px]"
        )}
      >
        <ProjectImage alt={alt} src={src} href={href} />
      </div>
      <div className="flex flex-col justify-center mt-[56px] max-xl:mt-[10px]">
        <span className="text-center text-black text-[40px] max-xl:text-base font-[700]">
          {title}
        </span>
        <span className="text-center text-black text-[24px] max-xl:text-base font-bold">
          {desc}
        </span>
      </div>
    </div>
  );
};
