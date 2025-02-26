import React from "react";
import Image from "next/image";

const BarMiddle = () => {
  return <div className="bg-[#A47864] w-[100px] h-[6px] rounded-2xl"></div>;
};

const AboutSubTitle = ({ title }) => {
  return (
    <div className="flex justify-start items-center gap-2 mb-[40px]">
      <BarMiddle />
      <div className="text-[40px] font-bold">{title}</div>
      <BarMiddle />
    </div>
  );
};

export const About = () => {
  const devSkills = [
    {
      title: "javascript",
      image: "javascript-1.png",
    },
    {
      title: "Next.js",
      image: "nextjs.png",
    },
    {
      title: "HTML",
      image: "html.png",
    },
    {
      title: "CSS",
      image: "css.png",
    },
    {
      title: "React",
      image: "react.png",
    },
    {
      title: "Git",
      image: "git.png",
    },
    {
      title: "Wordpress",
      image: "wordpress.png",
    },
  ];
  const designSkills = [
    {
      title: "Figma",
      image: "figma1.png",
    },
    {
      title: "Photoshop",
      image: "photoshop.png",
    },
    {
      title: "After Effects",
      image: "after-effects.png",
    },
    {
      title: "Illustrator",
      image: "illustrator.png",
    },
    {
      title: "Indesign",
      image: "indesign.png",
    },
  ];
  return (
    <section className="w-full ">
      <div className="mb-[120px]">
        <section id="about" className="pt-[130px]">
          <AboutSubTitle title="About Me!" />
        </section>
        <div className="flex">
          <div className="mr-[53px] text-[32px] font-semibold">
            Hello! I’m Yeongtaek. I’m a designer and developer!
            <br /> I specialize in Digital Design and Development.
            <br /> I am passionate about UX/UI design and front-end
            <br /> development, with a strong focus on creating user-
            <br />
            centered digital experiences.
          </div>
          <Image src="/me.png" width={360} height={260} alt="me" />
        </div>
      </div>
      <div className="py-6 w-full mb-20">
        <AboutSubTitle title="Development Skills" />
        <div className="flex w-full p-4">
          <div className="flex items-center justify-start gap-[70px] flex-wrap">
            {devSkills.map((skill) => {
              return (
                <div
                  key={skill.title}
                  className="flex flex-col justify-center items-center w-[150px] h-[150px] hover:w-[155px] hover:h-[155px] rounded-[50px]"
                  style={{
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    backgroundColor: "rgba(164, 120, 100, 0.07)",
                  }}
                >
                  <Image
                    src={`/${skill.image}`}
                    width={80}
                    height={80}
                    alt={skill.title}
                  />
                  <div className="text-[20px] font-bold">{skill.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <AboutSubTitle title="Design Skills" />
      </div>
      <div className="flex w-full p-4">
        <div className="flex items-center justify-start gap-[70px] flex-wrap">
          {designSkills.map((skill) => {
            return (
              <div
                key={skill.title}
                className="flex flex-col justify-center items-center w-[150px] h-[150px] hover:w-[155px] hover:h-[155px] rounded-[50px] "
                style={{
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  backgroundColor: "rgba(164, 120, 100, 0.07)",
                }}
              >
                <Image
                  src={`/${skill.image}`}
                  width={80}
                  height={80}
                  alt={skill.title}
                />
                <div className="text-[20px] font-bold">{skill.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
