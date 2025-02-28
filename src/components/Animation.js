import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Animation = () => {
  const [rotationAxis, setRotationAxis] = useState({ x: 1, y: 1, z: 1 });

  useEffect(() => {
    const randomAxis = {
      x: Math.random() > 0.5 ? 1 : -1,
      y: Math.random() > 0.5 ? 1 : -1,
      z: Math.random() > 0.5 ? 1 : -1,
    };
    setRotationAxis(randomAxis);
  }, []);

  return (
    <div>
      <div
        style={{
          animation: `rotate3D 5s infinite linear`,
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
          @keyframes rotate3D {
            0% {
              transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            }
            100% {
              transform: rotateX(${rotationAxis.x * 360}deg)
                         rotateY(${rotationAxis.y * 360}deg)
                         rotateZ(${rotationAxis.z * 360}deg);
            }
          }
        `}
      </style>
    </div>
  );
};
