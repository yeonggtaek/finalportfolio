import React from "react";
import Link from "next/link";

export const LinkButton = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="flex justify-center items-center transition-transform duration-300 hover:-translate-y-3 w-[120px] max-xl:w-[60px] h-[120px] max-xl:h-[60px] rounded-[50px]"
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      {children}
    </Link>
  );
};
