"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Contact Information
      </h3>
      <p className="text-base sm:text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
        We'd love to hear about your project and explore how we can help
        bring your brand vision to life.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <motion.a
          href="mailto:hello@brandstudio.com"
          className="flex flex-col items-center gap-4 text-gray-700 hover:text-gray-900 group"
          whileHover={{ y: -5, scale: 1.05 }}
        >
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
            <Mail className="text-gray-900 group-hover:text-white transition-colors" size={24} />
          </div>
          <div className="text-center">
            <p className="font-semibold text-base sm:text-lg mb-1">Email</p>
            <p className="text-sm sm:text-base text-gray-600">hello@brandstudio.com</p>
          </div>
        </motion.a>

        <motion.a
          href="tel:+1234567890"
          className="flex flex-col items-center gap-4 text-gray-700 hover:text-gray-900 group"
          whileHover={{ y: -5, scale: 1.05 }}
        >
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
            <Phone className="text-gray-900 group-hover:text-white transition-colors" size={24} />
          </div>
          <div className="text-center">
            <p className="font-semibold text-base sm:text-lg mb-1">Phone</p>
            <p className="text-sm sm:text-base text-gray-600">+1 (234) 567-890</p>
          </div>
        </motion.a>

        <motion.div
          className="flex flex-col items-center gap-4 text-gray-700"
          whileHover={{ y: -5, scale: 1.05 }}
        >
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
            <MapPin className="text-gray-900" size={24} />
          </div>
          <div className="text-center">
            <p className="font-semibold text-base sm:text-lg mb-1">Location</p>
            <p className="text-sm sm:text-base text-gray-600">New York, NY</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

