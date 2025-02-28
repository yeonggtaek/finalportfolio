import Image from "next/image";
import React from "react";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center m-auto min-h-screen">
      <Header />
      <main
        className={`pt-[80px] w-[1280px] max-xl:w-[402px] flex-1 p-10 max-xl:p-[30px]`}
      >
        {children}
      </main>
      <div className="text-[30px] max-xl:text-base font-semibold text-center mt-8">
        Contact me!
      </div>
      <Image
        className="mt-4"
        alt="icon"
        src="/icon.png"
        width={100}
        height={100}
      />
      <div className="mt-5">
        <footer className="row-start-3 flex gap-10 flex-wrap items-center justify-center mb-10">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/yeongtaek-lee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin.png"
              alt="linkedin"
              width={50}
              height={50}
              className="transition-transform duration-300 hover:-translate-y-3"
            />
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:dldudxor0707@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/email.png"
              alt="email"
              width={50}
              height={50}
              className="transition-transform duration-300 hover:-translate-y-3"
            />
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/yeonggtaek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github.png"
              alt="github"
              width={50}
              height={50}
              className="transition-transform duration-300 hover:-translate-y-3"
            />
          </a>
        </footer>
      </div>
    </div>
  );
};
