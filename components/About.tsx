"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, Rocket, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: 100, suffix: "+", label: "Brands Launched" },
  { icon: Users, value: 50, suffix: "+", label: "Happy Clients" },
  { icon: Rocket, value: 5, suffix: "+", label: "Years Experience" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Client Satisfaction" },
];

function CountUp({ end, suffix = "", duration = 2, isActive = false }: { 
  end: number; 
  suffix?: string; 
  duration?: number;
  isActive?: boolean;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isActive && !hasAnimated.current) {
      hasAnimated.current = true;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        countRef.current += increment;
        if (countRef.current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(countRef.current));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    } else if (!isActive) {
      // Show final value immediately if not active (fallback)
      setCount(end);
    }
  }, [end, duration, isActive]);

  // Fallback: show final value if animation hasn't started after a delay
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (count === 0 && end > 0) {
        setCount(end);
      }
    }, 100);

    return () => clearTimeout(fallbackTimer);
  }, [count, end]);

  return (
    <span>
      {Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-white w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center lg:text-left">
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
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="aspect-square w-full max-w-md bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
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

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} isActive={isInView} />
                </div>
                <p className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
