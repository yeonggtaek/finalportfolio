import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/blog1.png",
  "/blog2.png",
  "/blog3.png",
  "/blog4.png",
];

export default function ImageSlider() {
  return (
    <div className="overflow-hidden relative p-4">
      <motion.div
        className="flex space-x-4"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="w-80 h-auto rounded-xl shadow-lg" />
        ))}
      </motion.div>
    </div>
  );
}
