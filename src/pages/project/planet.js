import { Layout } from "@/components/Layout";
import Image from "next/image";
import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl shadow-xl p-12 bg-[#a4786412]">
      <div className="text-[36px] text-[#0A4E9F] font-bold">{title}</div>
      <div className="text-[20px]">{content}</div>
    </div>
  );
};

const PlanetPage = () => {
  return (
    <Layout>
      <div className="flex pt-20 flex-col gap-10">
        <div className="flex justify-between title">
          <div className="flex flex-col gap-10">
            <Image
              src="/Planet_Saver_text.png"
              width={430}
              height={70}
              alt="planet saver"
            />
            <ul className="text-[40px] font-bold text-[#0A4E9F]">
              <li>Jan - May 2024</li>
              <li>ROLE: Developer, Designer</li>
            </ul>
          </div>
          <div>
            <Image src="/earth.png" width={200} height={200} alt="earth" />
          </div>
        </div>
        <div className="logos flex gap-12">
          <Image src="/github.png" width={80} height={80} alt="github" />
          <Image src="/vercel.png" width={80} height={80} alt="vercel" />
        </div>
        <div className="overview flex flex-col gap-10">
          <div className="overview-title text-[64px] text-[#0A4E9F] font-bold">
            Project Overview
          </div>
          <div className="overview-content text-[32px] text-black">
            <span className="font-bold">Planet Saver </span>
            is an educational web for children, designed to address global
            warming through interactive quizzes and easy-to-understand
            explanations. This tool aims to promote awareness of climate change
            while offering actionable solutions to mitigate its effects.
          </div>
        </div>
        <Card
          title="Objectives"
          content={
            <ul>
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
            <ol>
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
          <div className="text-center text-[48px] text-[#0A4E9F] font-bold">
            Quiz Section
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <Image />
              <Image />
            </div>
            <div className="flex">
              <Image />
              <Image />
            </div>
            <div className="flex">
              <Image />
              <Image />
            </div>
          </div>
        </div>
        <div className="colorPalette"></div>
        <div className="fonts"></div>
      </div>
    </Layout>
  );
};

export default PlanetPage;
