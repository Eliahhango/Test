"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Rocket, TrendingUp } from "lucide-react";
import StatsGrid from "./StatsGrid";

const stats = [
  { icon: Award, value: 150, suffix: "+", label: "Brands Launched" },
  { icon: Users, value: 200, suffix: "+", label: "Happy Clients" },
  { icon: Rocket, value: 10, suffix: "+", label: "Years Experience" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 bg-white w-full"
    >
      <div className="content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center lg:text-left mb-6">
              Our Philosophy
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed text-center lg:text-left">
              We believe that exceptional branding is more than just aesthetics—it's
              about creating meaningful connections between brands and their audiences.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed text-center lg:text-left">
              Our approach combines strategic thinking with creative excellence,
              ensuring that every brand we craft not only looks remarkable but also
              drives measurable business results.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              We're committed to building future-proof brand identities that evolve
              with your business and stand the test of time.
            </p>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="aspect-square w-full max-w-md bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative z-10 text-center">
                <motion.div
                  className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl sm:text-4xl text-white font-bold">BS</span>
                </motion.div>
                <p className="text-gray-700 font-semibold text-lg">Brand Studio Team</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <StatsGrid stats={stats} isInView={isInView} />
      </div>
    </section>
  );
}

