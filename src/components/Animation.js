import React, { useState, useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Animation = () => {
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const container = containerRef.current.getBoundingClientRect();

      const mouseX = event.clientX - container.left;
      const mouseY = event.clientY - container.top;

      if (mouseX >= 0 && mouseX <= container.width && mouseY >= 0 && mouseY <= container.height) {
        setTargetPos({ x: mouseX - 100, y: mouseY - 100 }); 
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      setCurrentPos((prevPos) => ({
        x: lerp(prevPos.x, targetPos.x, 0.1),
        y: lerp(prevPos.y, targetPos.y, 0.1),
      }));
      requestAnimationFrame(animate);
    };

    animate();
  }, [targetPos]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '300px',
        height: '250px',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <DotLottieReact
        src="https://lottie.host/dbfd5756-4a09-418f-ad03-6e18529f261d/4h9WYANPPj.lottie"
        background="transparent"
        speed="1"
        style={{
          width: '200px',   
          height: '200px',
          position: 'absolute',
          left: `${currentPos.x}px`,
          top: `${currentPos.y}px`,
          pointerEvents: 'none',
        }}
        loop
        autoplay
      />
    </div>
  );
};
