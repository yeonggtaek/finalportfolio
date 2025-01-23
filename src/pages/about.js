import { Layout } from "@/components/Layout";
import React from "react";

const AboutPage = () => {
  return <Layout>
    <div class="flex flex-row justify-start items-center gap-4 pb-4"><p class="text-2xl font-bold text-black">About Me</p></div>
    <div>
    <p>Hello! I’m Yeongtaek. I’m a Web Designer and Developer!</p>
    <p>Specializing in Digital Design and Development. I am passionate about UX/UI design and front-end development, with a strong focus on creating user-centered digital experiences.</p>
    </div>
  </Layout>;
};

export default AboutPage;
