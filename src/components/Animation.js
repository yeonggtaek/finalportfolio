import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
    <div
      style={{
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '1000px',
      }}
    >
      <div
        style={{
          width: '200px',
          height: '200px',
          animation: `rotate3D 4s infinite linear`, 
          transformOrigin: 'center',
        }}
      >
        <DotLottieReact
          src="https://lottie.host/dbfd5756-4a09-418f-ad03-6e18529f261d/4h9WYANPPj.lottie"
          background="transparent"
          speed="1"
          style={{
            width: '100%',
            height: '100%',
          }}
          loop
          autoplay
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
