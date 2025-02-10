import { Layout } from "@/components/Layout";
import React from "react";
import Image from "next/image";

const Card = ({ title, content, sideContent, className }) => {
  return (
    <div
      className={`flex gap-[58px] rounded-[50px] bg-[#a4786412] shadow-xl p-12 text-black ${
        className ? className : ""
      }`}
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex-1 flex flex-col gap-2">
        <div className="text-[36px] font-bold text-black">{title}</div>
        <div className="flex-1 text-[20px]">{content}</div>
      </div>
      {sideContent}
    </div>
  );
};

const PosterPage = () => {
  return (
    <Layout>
      <div className="text-black text-[64px] font-bold">Poster Design</div>
      <div className="overview flex flex-col gap-[32px] mt-[70px]">
        <div className="overview-title text-[40px] text-black font-bold">
          Project Overview
        </div>
        <div className="overview-content text-[32px] text-black">
          <span className="font-bold">APT </span>
          is a collaborative music project featuring Rosé and Bruno Mars. This
          design aims to visually harmonize the distinct personalities of both
          artists while emphasizing the mood and concept of their music.
        </div>
      </div>
      <div className="flex flex-col gap-[76px]">
        <div className="mt-9 rounded-[50px] overflow-hidden shadow-xl">
          <Image src="/apt-poster.png" width={1200} height={915} alt="apt" />
        </div>
      </div>
      <div className="my-[110px]">
        <div className="text-black text-[40px] font-bold">Postermockups</div>
        <div className="mt-[110px] flex gap-[58px]">
          <div
            className="rounded-2xl shadow-2xl overflow-hidden"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Image
              src="/mockup-color.png"
              width={500}
              height={333}
              alt="color mockup"
            />
          </div>
          <div
            className="rounded-2xl shadow-2xl overflow-hidden"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Image
              src="/mockup-gray.png"
              width={500}
              height={333}
              alt="gray mockup"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PosterPage;

