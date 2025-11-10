"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "BrandStudio transformed our brand identity completely. The strategic approach and creative execution exceeded all our expectations. Our brand recognition has increased significantly.",
    author: "Sarah Johnson",
    role: "CEO, TechFlow Solutions",
    company: "TechFlow Solutions",
  },
  {
    quote:
      "Working with BrandStudio was a game-changer. They understood our vision and brought it to life in ways we never imagined. The attention to detail is remarkable.",
    author: "Michael Chen",
    role: "Founder, Artisan Coffee Co.",
    company: "Artisan Coffee Co.",
  },
  {
    quote:
      "The team at BrandStudio doesn't just design—they think strategically about how every element contributes to our business goals. Outstanding results!",
    author: "Emily Rodriguez",
    role: "Marketing Director, GreenSpace Initiative",
    company: "GreenSpace Initiative",
  },
  {
    quote:
      "From concept to execution, BrandStudio delivered a brand identity that perfectly captures our essence. The process was collaborative, professional, and inspiring.",
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the brands we've helped transform
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <Quote className="text-gray-900 mb-6" size={48} />
              <p className="text-2xl md:text-3xl text-gray-900 mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
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
        </div>
      </div>
    </section>
  );
}

