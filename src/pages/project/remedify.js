import { Layout } from "@/components/Layout";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/user_persona1.png",
  "/user_persona2.png"
];


const RemedifyPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
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
        <div className="overview flex flex-col gap-10">
          <div className="overview-title text-[64px] text-[#007972] font-bold">
          Challenge
          </div>
          <div className="overview-content text-[32px] text-black">
          <span className="font-bold">Medication Adherence & Engagement:</span> Patients struggle with forgetfulness and misunderstanding, leading to poor adherence and low app engagement.
          <span className="font-bold"><br/>Complex Medical Data & AI Accuracy:</span> Medical information is hard to understand, and AI-generated insights must be accurate and trustworthy.
          <span className="font-bold"><br/>Real-Time & Secure Data Handling:</span> The app requires real-time updates from reliable sources, with strong API security and data protection.
          <span className="font-bold"><br/>Cross-Platform Performance:</span> Needs to run smoothly on iOS, Android, and Web while handling large-scale data efficiently.
          <span className="font-bold"><br/>Caregiver & Patient Coordination:</span> Caregivers need shared tracking and secure communication to assist patients effectively.
          </div>
        </div>
        <div className="overview flex flex-col gap-10">
          <div className="overview-title text-[64px] text-[#007972] font-bold">
          Solution
          </div>
          <div className="overview-content text-[32px] text-black">
          <span className="font-bold">Smart Medication Tracking:</span> AI-powered reminders and scheduling help users stay on track and build habits.
          <span className="font-bold"><br/>AI Medication Library:</span> Simplifies medical terms using AI and allows DIN scanning for easy entry.
          <span className="font-bold"><br/>Secure & Real-Time Data:</span> Uses Health Canada’s database with Azure API, ensuring accuracy and encryption.
          <span className="font-bold"><br/>Optimized Performance:</span> Built with React Native & Expo, featuring fast API calls and caching for smooth cross-platform use.
          <span className="font-bold"><br/>Caregiver Support:</span> Shared tracking & smart notifications enable caregivers to monitor adherence easily.
          </div>
        </div>
        <div className="overview flex flex-col gap-10">
          <div className="overview-title text-[64px] text-[#007972] font-bold">
          Who Remedify is For
          </div>
          <div className="overview-title text-[64px] text-[#007972] font-bold">
          User persona
          </div>
          <div className="overview-content text-[32px] text-black flex justify-center items-center gap-4">
            <button onClick={handlePrev} className="text-[50px]">⬅</button>
            <Image src={images[currentImageIndex]} width={500} height={300} alt="User Persona" />
            <button onClick={handleNext} className="text-[50px]">➡</button>
          </div>
        </div>
        <div className="overview-title text-[64px] text-[#007972] font-bold">
          Sitemap
          </div>
          <div className="overview-content text-[32px] text-black flex justify-center items-center gap-4">
            <Image src="/sitemap.png" width={780} height={530} alt="sitemap" />
          </div>
      </div>
  </Layout>
);
};

export default RemedifyPage;
