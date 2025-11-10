"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "BrandStudio transformed our brand identity completely. The strategic approach and creative execution exceeded all our expectations. Our brand recognition has increased significantly since the launch.",
    author: "Sarah Johnson",
    role: "CEO, TechFlow Solutions",
    company: "TechFlow Solutions",
  },
  {
    quote:
      "Working with BrandStudio was a game-changer. They understood our vision and brought it to life in ways we never imagined. The attention to detail is remarkable and the results speak for themselves.",
    author: "Michael Chen",
    role: "Founder, Artisan Coffee Co.",
    company: "Artisan Coffee Co.",
  },
  {
    quote:
      "The team at BrandStudio doesn't just design—they think strategically about how every element contributes to our business goals. Outstanding results and a pleasure to work with!",
    author: "Emily Rodriguez",
    role: "Marketing Director, GreenSpace Initiative",
    company: "GreenSpace Initiative",
  },
  {
    quote:
      "From concept to execution, BrandStudio delivered a brand identity that perfectly captures our essence. The process was collaborative, professional, and inspiring throughout.",
    author: "David Park",
    role: "Creative Director, Luxe Fashion House",
    company: "Luxe Fashion House",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-center">
            Client Testimonials
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center">
            Hear from the brands we've helped transform and grow
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <Quote className="text-gray-900 mb-6 w-10 h-10 sm:w-12 sm:h-12 mx-auto sm:mx-0" />
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 mb-8 leading-relaxed text-center sm:text-left">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="text-center sm:text-left">
                <p className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-sm sm:text-base text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={goToPrevious}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-gray-900" size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-gray-900 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={goToNext}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-gray-900" size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
