"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-gray-900 to-gray-700"
        style={{ width: "100%" }}
      />
    </motion.div>
  );
}

