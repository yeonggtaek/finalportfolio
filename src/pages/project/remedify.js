import { Layout } from "@/components/Layout";
import React from "react";
import Image from "next/image";

const RemedifyPage = () => {
  return (
    <Layout>
              <Image
          width="300"
          height="300"
          src="/remedify logo.png"
          alt="remedify logo"
        />
      <div style={{ display: "flex", alignItems: "center", gap: "200px", marginBottom: "20px" }}>
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Sep - Dec 2024</li>
            <li>ROLE: Developer</li>
          </ul>
          <p>Remedify is an AI-powered app designed to improve medication adherence by addressing common challenges like misunderstanding and forgetfulness. It simplifies managing medications with features like a personalized schedule, AI-powered photo recognition for adding medications, and a comprehensive Medication Library providing detailed drug information. </p>
        </div>
        <div>
          <Image
            width="1000"
            height="400"
            src="/remedify image.png"
            alt="remedify image"
          />
        </div>
      </div>
      <div>
        <p>What is remedify?</p>
      </div>
    </Layout>
  );
};

export default RemedifyPage;
