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

function CountUp({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
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
  }, [end, duration]);

  return (
    <span>
      {Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              We believe that exceptional branding is more than just aesthetics—it's
              about creating meaningful connections between brands and their audiences.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our approach combines strategic thinking with creative excellence,
              ensuring that every brand we craft not only looks remarkable but also
              drives measurable business results.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're committed to building future-proof brand identities that evolve
              with your business and stand the test of time.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">BS</span>
                </div>
                <p className="text-gray-600 font-medium">Brand Studio Team</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {isInView ? (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

