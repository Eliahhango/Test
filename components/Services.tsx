"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Globe, Target, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Strategy",
    description:
      "Comprehensive brand positioning and strategy development that aligns with your business goals and market positioning.",
  },
  {
    icon: Target,
    title: "Visual Identity",
    description:
      "Distinctive logos, color palettes, and design systems that capture your brand essence and create memorable experiences.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Modern, responsive websites that provide exceptional user experiences and drive conversions across all devices.",
  },
  {
    icon: Sparkles,
    title: "Brand Experience",
    description:
      "End-to-end brand experiences across all touchpoints, from digital platforms to physical spaces and beyond.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 bg-white w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-center">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center">
            Comprehensive branding solutions tailored to your unique needs and business objectives
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:from-gray-800 group-hover:to-gray-600 transition-all duration-300 mx-auto"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
