import Image from "next/image";
import React from "react";
import { Navigation } from "./Navigation";
import Link from 'next/link';

export const Header = () => {
  return (
    <section className="fixed top-0 left-0 backdrop-blur-lg z-20 w-full px-10 py-5">
      <div className="flex items-center justify-between max-w-[1280px] m-auto">
      <Link href="/">
        <div className="logo-div" style={{ cursor: 'pointer' }}>
          <Image width={74} height={72} src="/logo.png" alt="logo" />
        </div>
      </Link>
      <Navigation />
      </div>
    </section>
  );
};