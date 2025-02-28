import Link from "next/link";
import React from "react";

export const Navigation = () => {
  const menus = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/#about",
    },
    {
      label: "Projects",
      url: "/#projects",
    },
    {
      label: "Resume",
      url: "/Resume.pdf",
      target: "_blank",
    },
  ];
  return (
    <ul className="flex jutify-center items-center gap-6">
      {menus.map((menu) => (
        <li
          key={menu.label}
          className="font-semibold text-[26px] max-xl:text-base"
        >
          <Link href={menu.url}>{menu.label}</Link>
        </li>
      ))}
    </ul>
  );
};
