import Image from "next/image";
import React from "react";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <section className="fixed top-0 left-0 backdrop-blur-lg w-full px-10 py-5">
      <div className="flex flex items-center justify-between max-w-[1280px] m-auto">
        <div className="logo-div">
          <Image width="74" height="72" src="/logo.png" alt="logo" />
        </div>
        <Navigation />
      </div>
    </section>
  );
};
