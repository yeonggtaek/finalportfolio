import { Layout } from "@/components/Layout";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";
import Blog from "@/components/Blog";
import { Colours } from "../../../components/Colours";
import { Fonts } from "../../../components/Fonts";
import { Logo } from "../../../components/Logo";
import { MedLib } from "../../../components/MedLib";
import { Code } from "../../../components/Code";
import { CodeChallenge } from "../../../components/CodeChallenge";
import { FinalDesign } from "../../../components/Finaldesign";
const images = ["/user_persona1.png", "/user_persona2.png"];

const RemedifyPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
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
            <ul className="text-[35px] font-bold text-[#00A39B]">
              <li>Sep - Dec 2024</li>
              <li>ROLE: Developer</li>
              <li>Tools: React Native, OpenAI GPT-4o Mini, <br />Canadian Drug product Database API, Node.js, <br />UI Kitten</li>
            </ul>
          </div>
          <ul>
          <div>
            <Image
              src="/Medical_Prescription.png"
              width={300}
              height={300}
              alt="earth"
            />
          </div>
          </ul>
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
            Medication adherence is a significant challenge, particularly for
            individuals with chronic conditions and cognitive impairments.
            Studies show that only 50% of prescribed medications are taken as
            directed, often due to misunderstanding and forgetfulness. To
            address this, <span className="font-bold">Remedify</span> was
            developed—an AI-powered medication reminder app that simplifies the
            process of tracking, understanding, and managing prescriptions.
          </div>
        </div>
        <div className="overview flex flex-col gap-10">
          <div className="overview-title text-[64px] text-[#007972] font-bold">
            Challenge
          </div>
          <div className="overview-content text-[32px] text-black">
            <span className="font-bold">
              Medication Adherence & Engagement:
            </span>{" "}
            Patients struggle with forgetfulness and misunderstanding, leading
            to poor adherence and low app engagement.
            <span className="font-bold">
              <br />
              Complex Medical Data & AI Accuracy:
            </span>{" "}
            Medical information is hard to understand, and AI-generated insights
            must be accurate and trustworthy.
            <span className="font-bold">
              <br />
              Real-Time & Secure Data Handling:
            </span>{" "}
            The app requires real-time updates from reliable sources, with
            strong API security and data protection.
            <span className="font-bold">
              <br />
              Cross-Platform Performance:
            </span>{" "}
            Needs to run smoothly on iOS, Android, and Web while handling
            large-scale data efficiently.
            <span className="font-bold">
              <br />
              Caregiver & Patient Coordination:
            </span>{" "}
            Caregivers need shared tracking and secure communication to assist
            patients effectively.
          </div>
        </div>
        <div className="overview flex flex-col gap-10">
          <div className="overview-title text-[64px] text-[#007972] font-bold">
            Solution
          </div>
          <div className="overview-content text-[32px] text-black">
            <span className="font-bold">Smart Medication Tracking:</span>{" "}
            AI-powered reminders and scheduling help users stay on track and
            build habits.
            <span className="font-bold">
              <br />
              AI Medication Library:
            </span>{" "}
            Simplifies medical terms using AI and allows DIN scanning for easy
            entry.
            <span className="font-bold">
              <br />
              Secure & Real-Time Data:
            </span>{" "}
            Uses Health Canada’s database with Azure API, ensuring accuracy and
            encryption.
            <span className="font-bold">
              <br />
              Optimized Performance:
            </span>{" "}
            Built with React Native & Expo, featuring fast API calls and caching
            for smooth cross-platform use.
            <span className="font-bold">
              <br />
              Caregiver Support:
            </span>{" "}
            Shared tracking & smart notifications enable caregivers to monitor
            adherence easily.
          </div>
        </div>
        <div className="overview flex flex-col gap-10">
          <div className="flex flex-col items-center gap-[66px]">
            <div className="overview-title text-[64px] text-[#007972] font-bold">
              Who Remedify is For
            </div>
            <div className="flex gap-[140px]">
              <div className="flex flex-col gap-[36px]">
                <Image
                  src="/who1.png"
                  width={248}
                  height={248}
                  alt="who1"
                />
                <div className="text-center text-[24px] text-[#00A39B] font-bold">
                  Polypharmacy
                </div>
                <div className="text-[20px] font-semibold">
                  Remedify helps users
                  <br /> manage multiple
                  <br /> medications with clear
                  <br />
                  reminders, making
                  <br />
                  schedules simple and
                  <br />
                  health easier to control.
                </div>
              </div>
              <div className="flex flex-col gap-[36px]">
                <Image
                  src="/who2.png"
                  width={248}
                  height={248}
                  alt="who1"
                />
                <div className="text-center text-[24px] text-[#00A39B] font-bold">
                  Cognitive impairments
                </div>
                <div className="w-[288px] text-[20px] font-semibold">
                  Remedify’s smart reminders assist users with cognitive
                  challenges, fostering confidence and routine in medication
                  management.
                </div>
              </div>
            </div>
          </div>
          <div className="overview-title text-[64px] text-[#007972] font-bold">
            User persona
          </div>
          <div className="overview-content text-[32px] text-black flex justify-center items-center gap-4">
            <button onClick={handlePrev} className="text-[50px] text-[#00A39B]">
              ⬅
            </button>
            <Image
              src={images[currentImageIndex]}
              width={500}
              height={300}
              alt="User Persona"
            />
            <button onClick={handleNext} className="text-[50px] text-[#00A39B]">
              ➡
            </button>
          </div>
        </div>
        <div className="overview-title text-[64px] text-[#007972] font-bold">
          Sitemap
        </div>
        <div className="overview-content text-[32px] text-black flex justify-center items-center gap-4">
          <Image src="/sitemap.png" width={800} height={600} alt="sitemap" />
        </div>
        <div className="overview-title text-[64px] text-[#007972] font-bold">
          User Flow Map
        </div>
        <div className="overview-content text-[32px] text-black flex justify-center items-center gap-4">
          <Image src="/User Flow Map.png" width={1000} height={550} alt="User Flow Map" />
        </div>
        <div className="flex gap-3">
          <div className="overview-title text-[64px] text-[#007972] font-bold">
            Lo-Fi/Hi-Fi Wireframe
          </div>
        </div>
        <div className="flex gap-10">
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              width: "800px",
              height: "600px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
            }}
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/lbLaPFGzOxiCvLbD18gxEl/Remedify-Wireframe?node-id=0-1&m=dev&t=cuEMAqubwRCsi26u-1"
            allowFullScreen
            title="lo-fi"
          ></iframe>
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              width: "800px",
              height: "600px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
            }}
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/lbLaPFGzOxiCvLbD18gxEl/Remedify-Wireframe?node-id=1797-14184&m=dev&t=cuEMAqubwRCsi26u-1"
            allowFullScreen
            title="hi-fi"
          ></iframe>
        </div>
        <div>
          <div className="overview-title text-[64px] text-[#007972] mb-[40] font-bold">
            STYLEGUIDE
          </div>
          <div className="flex flex-col items-center gap-[100px]">
            <Colours />
            <Fonts />
            <Logo />
          </div>
        </div>
        <div className="overview-title text-[64px] text-[#007972] font-bold justify-center flex">
          MoodBoard
        </div>
        <Slideshow />
        <div className="pt-10 flex w-full">
          <div className="flex flex-col">
            <div className="text-[48px] font-bold text-[#007972] mb-10">
              Feature Highlight
            </div>
            <div className="flex gap-[55px]">
              <Image
                src="/fh-1.png"
                width={223}
                height={484}
                alt="feature highlihgt 1"
              />
              <Image
                src="/fh-2.png"
                width={223}
                height={459}
                alt="feature highlihgt 2"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-[48px] font-bold text-[#007972] text-right mb-10">
              AI-Powered Label Scanning
            </div>
            <div className="flex gap-[30px] pt-10 pl-20">
              <Image
                src="/ai.png"
                width={176}
                height={320}
                alt="AI-Powered Label Scanning"
              />
              <div className="text-[24px] font-semibold py-10 pr-10">
                Easily scan your medication labels to set up reminders
                automatically, minimizing the steps you need to remember and
                simplifying the process.
              </div>
            </div>
          </div>
        </div>
        <ul className="text-[24px] font-semibold">
          <li>Organized medication schedules.</li>
          <li>Clear reminders to ensure adherence.</li>
        </ul>
        <MedLib />
        <Code />
        <CodeChallenge />
        <div className="overview-title text-[64px] text-[#007972] font-bold justify-center flex">
  Visual Story
</div>
<div className="flex justify-center">
  <video width="800" controls>
    <source src="/Remedify_Visual_Story_V9.mov" type="video/mp4" />
  </video>
</div>
<div className="overview-title text-[64px] text-[#007972] font-bold justify-center flex mt-10">Business Cards</div>
        <div className="flex justify-center mt-10 ">
          <Image src="/BusinessCards.png" width={700} height={400} alt="BusinessCards" />
        </div>
        <div>
        <div className="flex justify-center mt-10 gap-20 ">
          <Image src="/BusinessCards2.png" width={500} height={20} alt="BusinessCards2" />
          <Image src="/BusinessCards3.png" width={500} height={20} alt="BusinessCards3" />
          </div>
          </div>
        <FinalDesign/>
        <div className="overview-title text-[64px] text-[#007972] font-bold justify-center flex">
          Blog
        </div>
        <Blog />
        <div className="flex justify-center">
          <Link href="https://www.remedify.ca/">
            <button className="px-8 py-4 bg-[#00A39B] text-[#FAF8FE] font-bold rounded-lg shadow-md">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default RemedifyPage;