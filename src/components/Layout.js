import Image from "next/image";
import React from "react";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center m-auto min-h-screen">
      <Header />
      <main className={`pt-[110px] max-w-[1280px] flex-1 p-10`}>
        {children}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.png"
            alt="linkedin"
            width={30}
            height={30}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/email.png"
            alt="email"
            width={30}
            height={30}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.png"
            alt="github"
            width={30}
            height={30}
          />
        </a>
      </footer>
    </div>
  );
};
