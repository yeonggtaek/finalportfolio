import { Layout } from "@/components/Layout";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({ title, content, sideContent, className }) => {
  return (
    <div
      className={`flex gap-[58px] rounded-t-[50px] shadow-xl p-12 bg-[#FCE6C4] text-black ${
        className ? className : ""
      }`}
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex-1 flex flex-col gap-2">
        <div className="text-[36px] font-bold">{title}</div>
        <div className="flex-1 text-[20px]">{content}</div>
      </div>
      {sideContent}
    </div>
  );
};

const ColorPalette = ({ colorCode }) => {
  return (
    <div>
      <div
        className="w-[100px] h-[100px]"
        style={{ backgroundColor: colorCode }}
      ></div>
      <div> {colorCode}</div>
    </div>
  );
};

const CraftersConnectPage = () => {
  const colorCodes1 = [
    "#424B4F",
    "#A0E4FC",
    "#0CB0EA",
    "#ED960A",
    "#F5E2C2",
    "#E5DCD5",
  ];

  const colorCodes2 = [
    "#B1A593",
    "#F8F4EE",
    "#000000",
    "#FFFFFF",
    "#08BE51",
    "#B3261E",
  ];

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
              src="/vercel-text.svg"
              width={80}
              height={80}
              alt="vercel"
              className="mt-8 transition-transform duration-300 hover:-translate-y-3"
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
              <span className="font-bold">Foster Creativity:</span> Inspire
              users to explore their creativity through hands-on DIY projects,
              tutorials, and innovative crafting tools. Encourage Collaboration:
              Enable seamless collaboration by allowing users to invite others,
              share ideas, and work together on projects in real-time.
              <span className="font-bold">
                <br />
                Promote Skill Development:
              </span>{" "}
              Provide tools and resources that help users learn new skills and
              refine their craft through interactive tutorials and milestone
              tracking.
              <span className="font-bold">
                <br />
              Build Community:
              </span>{" "}
              Create a vibrant community of creators
              who share projects, offer feedback, and inspire one another.
              <span className="font-bold">
                <br />
                Streamline Project Management:
              </span>{" "}
              Offer intuitive tools for organizing projects, tracking progress,
              managing files, and achieving milestones effectively. 
              <span className="font-bold">
                <br />
              Celebrate and Share Creations:
              </span>{" "} 
              Empower users to showcase their finished
              projects within the app’s community or share them on external
              platforms to inspire others.
            </div>
          }
        />
<div className="overview-title flex">
  <div className="text-[64px] text-black font-bold">Styleguide</div>
  <Link href="https://www.figma.com/design/7NULAtnjrj1iwbcx0juovm/Crafter-Connect-IDSP?node-id=48-771&t=LMg8Smg03qAhXs3t-1">
    <button className="px-3 py-1 bg-#FCE6C4 text-black font-bold rounded-lg shadow-md">
      View
    </button>
  </Link>
</div>
        <Card
          className="h-[560px]"
          title="Logo and Branding"
          content={
            <div className="h-full pt-[120px] p-20">
              <Image
                src="/crafters-connect-logo.png"
                width={317}
                height={175}
                alt="crafters connect logo"
              />
            </div>
          }
          sideContent={
            <div className="flex flex-col gap-[80px] pt-20">
              <div className="flex justify-center items-center gap-[116px]">
                <div className="pt-16 text-[20px]">
                  <div className="font-bold">Horizontal</div>
                  <div>548x84px</div>
                </div>
                <div className="flex justify-center items-end gap-[16px]">
                  <div>
                    <Image src="/boat.png" width={136} height={54} alt="boat" />
                  </div>
                  <div>
                    <Image
                      src="/crafters-connect-letters.png"
                      width={243}
                      height={50}
                      alt="boat"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-[116px]">
                <div className="pt-16 text-[20px]">
                  <div className="font-bold">Vertical</div>
                  <div>441x159px</div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-2">
                  <div>
                    <Image src="/boat.png" width={136} height={54} alt="boat" />
                  </div>
                  <div>
                    <Image
                      src="/crafters-connect-letters.png"
                      width={243}
                      height={50}
                      alt="boat"
                    />
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Card
          title="Color Palette"
          content={
            <div>
              <div className="">
                The Colors at the top is our main color palette. These colors
                are featured within the buttons, chips snacks-bars, navigation
                etc. The bottom row of colors are for body text. #80BE51 -
                Positive outcome. #B3261E - Error.
              </div>
              <div className="mt-[33px] flex flex-col gap-7 items-center">
                <div className="flex gap-[35px]">
                  {colorCodes1.map((colorCode) => (
                    <ColorPalette key={colorCode} colorCode={colorCode} />
                  ))}
                </div>
                <div className="flex gap-[35px]">
                  {colorCodes2.map((colorCode) => (
                    <ColorPalette key={colorCode} colorCode={colorCode} />
                  ))}
                </div>
              </div>
            </div>
          }
        />
        <Card
          title="Typography"
          content={
            <div className="flex flex-col gap-[50px] pt-8 pl-20 ">
              <div>
                Below you can see our typography and font choices for the app. It
                includes a preview of th font family, font size, line height and
                colors.
              </div>
              <div>
                <h1 className="text-[40px] font-orelega">Headline H1</h1>
                <div className="font-orelega">
                  Font-family: Orelega One - Font-size: 40px - Font-weight:
                  Regular - Line-height: 36px
                </div>
              </div>
              <div>
                <h2 className="text-[32px] font-orelega">Headline H2</h2>
                <div className="font-orelega">
                  Font-family: Orelega One - Font-size: 32px - Font-weight:
                  Regular - Line-height: 34.9px
                </div>
              </div>
              <div>
                <h3 className="text-[32px] font-orelega">Headline H3</h3>
                <div className="font-orelega">
                  Font-family: Orelega One - Font-size: 24px - Font-weight:
                  Regular - Line-height: 36.2px
                </div>
              </div>
              <div className="font-bold">Paragraph Typography</div>
              <div>
                This is a paragraph using Mada regular at 16px, with a 20.7px
                line height in the color #000000. This will be our main body
                text for the app.
              </div>
              <div className="font-bold">
                This is a paragraph showing the use of bold 16px with a 20.8px
                line height. This will be used to display text on the buttons or
                to highlight certain areas of interest.
              </div>
            </div>
          }
        />
          <div className="overview-title text-[64px] text-black font-bold">
            Lo-Fi/Hi-Fi
          </div>
<div className="flex gap-10">
  <iframe
    style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "800px", height: "600px" }}
    src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/7NULAtnjrj1iwbcx0juovm/Crafter-Connect-IDSP?node-id=182-2958&m=dev&t=LMg8Smg03qAhXs3t-1"
    allowFullScreen
    title="lo-fi"
  ></iframe>  
<iframe
  style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "800px", height: "600px" }}
  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/7NULAtnjrj1iwbcx0juovm/Crafter-Connect-IDSP?node-id=0-1&m=dev&t=LMg8Smg03qAhXs3t-1"
  allowFullScreen
  title="hi-fi"
></iframe>
</div>

      </div>
    </Layout>
  );
};

export default CraftersConnectPage;
