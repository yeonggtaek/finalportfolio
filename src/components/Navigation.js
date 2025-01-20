import Link from "next/link";
import React from "react";

export const Navigation = () => {
  const menus = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Project",
      url: "/project",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Resume",
      url: "/resume",
    },
  ];
  return (
    <ul className="flex jutify-center items-center gap-6">
      {menus.map((menu) => (
        <li key={menu.label} className="font-semibold text-[40px]">
          <Link href={menu.url}>{menu.label}</Link>
        </li>
      ))}
    </ul>
  );
};
