import { Layout } from "@/components/Layout";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({ title, content, sideContent }) => {
  return (
    <div
      className="flex max-xl:flex-col gap-[58px] max-xl:gap-4 rounded-xl shadow-xl p-12 max-xl:p-4 bg-[#a4786412]"
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex-1 flex flex-col gap-2">
        <div className="text-[36px] max-xl:text-[16px] text-[#0A4E9F] font-bold">
          {title}
        </div>
        <div className="text-[20px] max-xl:text-[16px]">{content}</div>
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

const PlanetPage = () => {
  return (
    <Layout>
      <div className="flex pt-20 flex-col gap-10 text-black">
        <div className="flex justify-between title">
          <div className="flex flex-col gap-10 max-xl:gap-5 ">
            <Image
              className="max-xl:w-[150px] max-xl:h-[20px]"
              src="/Planet_Saver_text.png"
              width={430}
              height={70}
              alt="planet saver"
            />
            <ul className="text-[40px] max-xl:text-base font-bold text-[#0A4E9F]">
              <li>Jan - May 2024</li>
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
        <div className="logos flex gap-12 max-xl:gap-[25]">
          <Link href="https://github.com/yeonggtaek/planet-saver">
            <Image
              src="/github.png"
              width={80}
              height={80}
              alt="github"
              className="transition-transform duration-300 hover:-translate-y-3 max-xl:w-[50px] max-xl:h-[50px]"
            />
          </Link>

          <Link href="https://planet-saver.vercel.app/">
            <Image
              src="/vercel-text.svg"
              width={80}
              height={80}
              alt="vercel"
              className="mt-8 transition-transform duration-300 hover:-translate-y-3 max-xl:w-[50px] max-xl:h-[50px] mt-[3]"
            />
          </Link>
        </div>
        <div className="overview flex flex-col gap-10">
          <div className="overview-title text-[64px] text-[#0A4E9F] font-bold max-xl:text-[30px]">
            Project Overview
          </div>
          <div className="overview-content text-[32px] text-black max-xl:text-base">
            <span className="font-bold">Planet Saver </span>
            is an educational website for children, designed to address global
            warming through interactive quizzes and easy-to-understand
            explanations. This tool aims to promote awareness of climate change
            while offering actionable solutions to mitigate its effects.
          </div>
        </div>
        <Card
          title="Objectives"
          content={
            <ul className="max-xl:ml-4 list-disc leading-[50px] max-xl:leading-[20px]">
              <li>
                Educate Users: Simplify the science of global warming through
                engaging content and quizzes.
              </li>
              <li>
                Interactive Learning: Use visual aids and questions to make the
                learning process fun and effective.
              </li>
              <li>
                Empower Solutions: Provide users with practical solutions for
                combating climate change.
              </li>
            </ul>
          }
        />
        <Card
          title="Challenges"
          content={
            <ol className="max-xl:ml-4 list-disc leading-[50px] max-xl:leading-[20px]">
              <li>
                Managing the entire design and development lifecycle alone.
              </li>
              <li>
                Ensuring the interface is user-friendly while maintaining
                technical robustness.
              </li>
              <li>
                Crafting concise yet impactful explanations about complex global
                warming topics.
              </li>
            </ol>
          }
        />
        <div className="quizSection">
          <div className="text-center text-[48px] text-[#0A4E9F] font-bold max-xl:text-[30px]">
            Quiz Section
          </div>
          <div className="flex flex-col">
            <div className="flex gap-20 justify-center mt-10">
              <Image className="max-xl:h-[300]" src="/Quiz.png" width={500} height={900} alt="Quiz" />
              <Image className="max-xl:h-[300]" src="/Quiz1.png" width={500} height={900} alt="Quiz1" />
            </div>
            <div className="flex gap-20 justify-center mt-12">
              <Image className="max-xl:h-[300]" src="/Quiz2.png" width={500} height={900} alt="Quiz2" />
              <Image className="max-xl:h-[300]" src="/Quiz3.png" width={500} height={900} alt="Quiz3" />
            </div>
            <div className="flex gap-20 justify-center mt-12">
              <Image className="max-xl:h-[300]" src="/Quiz4.png" width={500} height={900} alt="Quiz4" />
              <Image className="max-xl:h-[300]" src="/Quiz5.png" width={500} height={900} alt="Quiz5" />
            </div>
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
                colorCode="#0A4E9F"
                title="Deep blue shade"
                description="This color resembles a toned-down navy blue or a slightly muted royal blue."
              />
              <ColorPalette
                colorCode="#2D9596"
                title="Teal or Aqua Green"
                description="This color is a medium shade of teal, sitting between green and blue on the spectrum, with a refreshing and calming feel."
              />
            </div>
          }
        />
        <Card
          title="Fonts"
          content={
            <div>
              <div className="mt-3 mb-[34px] text-2xl font-medium font-roboto max-xl:text-base">
                BODY - Medium 24px
              </div>
              <div className="text-xl font-medium leading-[50px] font-roboto max-xl:text-base">
                ABCDEFGHIJKLNMOPQRSTUVWXVZ
                <br />
                abcdefghijklnmopqrstuvwxyz
              </div>
            </div>
          }
          sideContent={
            <div className="pt-[10px] pr-[138px] text-2xl font-medium font-roboto max-xl:text-base">
              Roboto
            </div>
          }
        />
      </div>
    </Layout>
  );
};

export default PlanetPage;
