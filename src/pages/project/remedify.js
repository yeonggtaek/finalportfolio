import { Layout } from "@/components/Layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const RemedifyPage = () => {
  return (
    <Layout>
    <div className="flex pt-20 flex-col gap-10 text-black">
      <div className="flex justify-between title">
        <div className="flex flex-col gap-10">
          <Image
            src="/remedify logo.png"
            width={430}
            height={70}
            alt="remedify"
          />
          <ul className="text-[40px] font-bold text-[#00A39B]">
            <li>Sep - Dec 2024</li>
            <li>ROLE: Developer</li>
            <li>Skill: React Native, Expo, Node.js, Figma</li>
          </ul>
        </div>
        <div>
          <Image src="/Medical_Prescription.png" width={300} height={300} alt="earth" />
        </div>
      </div>
      <div className="logos flex gap-12">
        <Link href="https://github.com/yeenathan/asclepius">
          <Image
            src="/github.png"
            width={80}
            height={80}
            alt="github"
            className="transition-transform duration-300 hover:-translate-y-3"
          />
        </Link>
      </div>
      <div className="overview flex flex-col gap-10">
          <div className="overview-title text-[64px] text-[#007972] font-bold">
            Project Overview
          </div>
          <div className="overview-content text-[32px] text-black">
          Medication adherence is a significant challenge, particularly for individuals with chronic conditions and cognitive impairments. Studies show that only 50% of prescribed medications are taken as directed, often due to misunderstanding and forgetfulness. To address this, <span className="font-bold">Remedify</span> was developed—an AI-powered medication reminder app that simplifies the process of tracking, understanding, and managing prescriptions.
          </div>
        </div>
      </div>
  </Layout>
);
};

export default RemedifyPage;
