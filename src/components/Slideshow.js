import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/moodboard1.png",
  "/moodboard2.png",
  "/moodboard3.png",
  "/moodboard4.png"
];

export default function Slideshow() {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="relative rounded-lg w-full max-w-3xl mx-auto p-4 text-center">
        <img src={images[index]} className="w-full h-auto shadow-md transition-opacity rounded-2xl duration-1000 ease-in-out" alt="Slide" />
      </div>
    );
  }