import { Layout } from "@/components/Layout";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { LinkButton } from "@/components/LinkButton";

const Card = ({ title, content, sideContent, className }) => {
  return (
    <div
      className={`flex gap-[58px] max-xl:gap-1 rounded-t-[50px] shadow-xl p-12 max-xl:p-5 bg-[#FCE6C4] text-black max-xl:flex-col ${
        className ? className : ""
      }`}
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex-1 flex flex-col gap-2">
        <div className="text-[36px] max-xl:text-[12px] font-bold">{title}</div>
        <div className="flex-1 text-[20px]">{content}</div>
      </div>
      {sideContent}
    </div>
  );
};

const ColorPalette = ({ colorCode, title, description }) => {
  return (
    <div className="flex-1 shadow-xl rounded-2xl bg-white overflow-hidden">
      <div
        className={`p-[14px] pt-10 text-white text-md max-xl:text-base font-bold`}
        style={{ backgroundColor: colorCode }}
      >
        <div>HEX</div>
        <div>{colorCode}</div>
      </div>
      <div className="p-[14px]">
        <div className="text-xl max-xl:text-base font-bold">{title}</div>
        <div className="mt-[6px] mb-[14px] text-[#808080] font-bold">
          Primary
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

const Ecosystem = () => {
  return (
    <Layout>
      <div className="flex pt-20 flex-col gap-10 text-black">
        <div className="flex justify-between title">
        <div className="text-black text-[64px] text-[#626F47] font-bold max-xl:text-[35px] max-xl:mt-[60px]">BC ecosystem
            <ul className="text-[40px] max-xl:text-base font-bold text-[#626F47]">
              <li>April - May 2025</li>
              <li>ROLE: Developer, Designer</li>
            </ul>
          </div>
          <div>
            <Image
              className="max-xl:w-[80px] max-xl:h-[80px]"
              src="/earth.png"
              width={200}
              height={200}
              alt="earth"
            />
          </div>
          </div>
        <div className="logos flex items-center gap-12 max-xl:gap-[25]">
          <div className="text-[40px] max-xl:text-[15px] font-bold text-[#626F47]">
            Link to:
          </div>
          <LinkButton href="https://github.com/1medi/bc-ecosystems">
            <Image
              src="/git2.png"
              width={120}
              height={120}
              alt="github"
              className=" max-xl:w-[54px] max-xl:h-[35px]"
            />
          </LinkButton>
          <div className="text-[40px] max-xl:text-[15px] font-bold text-[#626F47]">
            Try this app:
          </div>
          <LinkButton href="https://bcecosystems.ca/">
            <Image
              src="/vercel-text.svg"
              width={80}
              height={80}
              alt="vercel"
              className="max-xl:w-[50px] max-xl:h-[50px] mt-[3]"
            />
          </LinkButton>
        </div>
        <div className="overview flex flex-col gap-10">
          <div className="overview-title text-[64px] text-[#626F47] font-bold max-xl:text-[30px]">
            Project Overview
          </div>
          <div className="overview-content text-[32px] text-black max-xl:text-base">
            <span className="font-bold">BC ecosystem </span>
            is a website to easily understand the BC environment.
          </div>
        </div>
        <Card
          title="Color Palette"
          content={
            <div className="xl:text-2xl leading-[70px] max-xl:leading-[20px]">
              The design leverages calming tones of blue
              <br /> and green, inspired by Earth’s natural
              <br /> elements, to create a soothing yet
              <br /> impactful visual experience.
            </div>
          }
          sideContent={
            <div className="flex gap-[60px] max-w-[50%] max-xl:gap-4 max-xl:max-w-full">
              <ColorPalette
                colorCode="#626F47"
                title="#626F47"
                description="A natural, earthy and stable atmosphere. Reminiscent of military looks, forests, earth and trees."
              />
              <ColorPalette
                colorCode="#EAE5E0"
                title="#EAE5E0"
                description="Natural and stable tone
                Calm and heavy feeling."
              />
            </div>
          }
        />
        <Card
          title="Fonts"
          content={
            <div>
              <div className="mt-3 mb-[34px] text-2xl font-medium font-kapital max-xl:text-base">
                BODY - Medium 24px
              </div>
              <div className="text-xl font-medium leading-[50px] font-kapital max-xl:text-base">
                ABCDEFGHIJKLNMOPQRSTUVWXVZ
                <br />
                abcdefghijklnmopqrstuvwxyz
              </div>
            </div>
          }
          sideContent={
            <div className="pt-[10px] pr-[138px] text-2xl font-medium font-kapital max-xl:text-base">
              Kapital
            </div>
          }
        />
      </div>
    </Layout>
  );
};

export default Ecosystem;
