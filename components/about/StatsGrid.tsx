"use client";

import { motion } from "framer-motion";
import { Award, Users, Rocket, TrendingUp, LucideIcon } from "lucide-react";
import CountUp from "./CountUp";

interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

export default function StatsGrid({ stats, isInView }: { stats: Stat[]; isInView: boolean }) {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full"
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
            transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ y: -5, scale: 1.05 }}
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
  );
}

