"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend validation only as per requirements
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your brand? Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We'd love to hear about your project and explore how we can help
              bring your brand vision to life.
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:hello@brandstudio.com"
                className="flex items-center gap-4 text-gray-700 hover:text-gray-900 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <Mail className="text-gray-900 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">hello@brandstudio.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-gray-700 hover:text-gray-900 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <Phone className="text-gray-900 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 text-gray-700"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-gray-900" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">New York, NY</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-900 outline-none transition-colors text-gray-900"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className={`absolute left-4 transition-all duration-300 ${
                  focused === "name" || formData.name
                    ? "top-0 text-sm text-gray-900"
                    : "top-3 text-base text-gray-500"
                }`}
              >
                Name
              </label>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gray-900 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused === "name" ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-900 outline-none transition-colors text-gray-900"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-300 ${
                  focused === "email" || formData.email
                    ? "top-0 text-sm text-gray-900"
                    : "top-3 text-base text-gray-500"
                }`}
              >
                Email
              </label>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gray-900 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused === "email" ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={6}
                className="w-full px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-900 outline-none transition-colors resize-none text-gray-900"
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-300 ${
                  focused === "message" || formData.message
                    ? "top-0 text-sm text-gray-900"
                    : "top-3 text-base text-gray-500"
                }`}
              >
                Message
              </label>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gray-900 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused === "message" ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

