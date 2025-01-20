import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-[40px] font-semibold">
          Hello! I’m Yeongtaek
          <br />
          I’m a Designer & Developer!
        </div>
        <Intro />
        <Projects />
      </div>
    </Layout>
  );
}
