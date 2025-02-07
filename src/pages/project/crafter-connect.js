import { Layout } from "@/components/Layout";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({ title, content, sideContent }) => {
  return (
    <div
      className="flex gap-[58px] rounded-t-[50px] shadow-xl p-12 bg-[#FCE6C4] text-black"
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex-1 flex flex-col gap-2">
        <div className="text-[36px] font-bold">{title}</div>
        <div className="text-[20px]">{content}</div>
      </div>
      {sideContent}
    </div>
  );
};

const PlanetPage = () => {
  return (
    <Layout>
      <div className="flex pt-20 flex-col gap-10 text-black">
        <div className="flex justify-between title">
          <div className="flex flex-col gap-10">
            <div className="text-black text-[40px] font-bold">
              Crafters Connect
            </div>
            <ul className="text-[40px] font-bold text-black">
              <li>Jan - May 2024</li>
              <li>ROLE: Developer, Designer</li>
            </ul>
          </div>
          <div>
            <Image
              src="/crafter-logo.png"
              width={305}
              height={180}
              alt="earth"
            />
          </div>
        </div>
        <div className="logos flex gap-12">
          <Link href="https://craftersconnect.vercel.app/">
            <Image
              src="/vercel.png"
              width={80}
              height={80}
              alt="vercel"
              className="transition-transform duration-300 hover:-translate-y-3"
            />
          </Link>
          <Link href="https://www.figma.com/proto/7NULAtnjrj1iwbcx0juovm/Crafter-Connect-IDSP?node-id=1-3088&t=H73n4CwWE8gxTK0F-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3088">
            <Image
              src="/figma.png"
              width={90}
              height={90}
              alt="figma"
              className="transition-transform duration-300 hover:-translate-y-3"
            />
          </Link>
        </div>
        <div className="overview flex flex-col gap-10">
          <div className="overview-title text-[64px] text-black font-bold">
            Project Overview
          </div>
          <div className="overview-content text-[32px] text-black">
            <span className="font-bold">Crafters Connect </span>
            is a platform for all DIY enthusiasts—dedicated creators, casual
            hobbyists, and helpers alike. It simplifies project sharing,
            collaboration, and progress tracking in one place. With tools for
            sharing ideas, showcasing work, and connecting through forums and
            updates, Crafters Connect ensures everyone feels included and
            inspired. By fostering creativity and teamwork, it brings people
            together to turn ideas into reality.
          </div>
        </div>
        <Card
          title="Objectives"
          content={
            <div className="list-disc leading-[50px]">
<span className="font-bold">Foster Creativity:</span> Inspire users to explore their creativity through hands-on DIY projects, tutorials, and innovative crafting tools.
Encourage Collaboration: Enable seamless collaboration by allowing users to invite others, share ideas, and work together on projects in real-time.
<span className="font-bold"><br/>Promote Skill Development:</span> Provide tools and resources that help users learn new skills and refine their craft through interactive tutorials and milestone tracking.
Build Community: Create a vibrant community of creators who share projects, offer feedback, and inspire one another.
<span className="font-bold"><br/>Streamline Project Management:</span> Offer intuitive tools for organizing projects, tracking progress, managing files, and achieving milestones effectively.
Celebrate and Share Creations: Empower users to showcase their finished projects within the app’s community or share them on external platforms to inspire others.
            </div>
          }
        />
        <Card
          title="Challenges"
          content={
            <ol className="list-[upper-roman] leading-[50px]">
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
        <Card
          title="Fonts"
          content={
            <div>
              <div className="mt-3 mb-[34px] text-2xl font-medium">
                BODY - Medium 24px
              </div>
              <div className="text-xl font-medium leading-[50px]">
                ABCDEFGHIJKLNMOPQRSTUVWXVZ
                <br />
                abcdefghijklnmopqrstuvwxyz
              </div>
            </div>
          }
          sideContent={
            <div className="pt-[10px] pr-[138px] text-2xl font-medium">
              Roboto
            </div>
          }
        />
      </div>
    </Layout>
  );
};

export default PlanetPage;
