import Image from "next/image";
import React from "react";

export const Animation = () => {
  return (
    <div className="mt-10">
      <div
        style={{
          animation: `floating 3s infinite ease-in-out`,
          transformOrigin: "center",
        }}
      >
        <Image
          src="/me-logo.png"
          alt="Animated Logo"
          width={400}
          height={200}
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <style>
        {`
          @keyframes floating {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </div>
  );
};
