"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle, XCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setShowSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setFocused(null);
    setIsSubmitting(false);

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-white w-full relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center">
            Ready to transform your brand? Let's start a conversation.
          </p>
        </motion.div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
            >
              <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold text-green-900">Message sent successfully!</p>
                <p className="text-sm text-green-700">We'll get back to you soon.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Contact Information Section */}
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

          {/* Contact Form Section */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-4 bg-transparent border-0 border-b-2 ${
                  errors.name ? "border-red-500" : "border-gray-300 focus:border-gray-900"
                } outline-none transition-colors text-gray-900`}
                placeholder="Enter your name"
                required
                aria-label="Name"
                aria-required="true"
                aria-invalid={!!errors.name}
              />
              <label
                htmlFor="name"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === "name" || formData.name
                    ? "top-0 text-sm text-gray-900"
                    : "top-4 text-base text-gray-500"
                }`}
              >
                Name
              </label>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 flex items-center gap-1"
                >
                  <XCircle size={14} />
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-4 bg-transparent border-0 border-b-2 ${
                  errors.email ? "border-red-500" : "border-gray-300 focus:border-gray-900"
                } outline-none transition-colors text-gray-900`}
                placeholder="Enter your email"
                required
                aria-label="Email"
                aria-required="true"
                aria-invalid={!!errors.email}
              />
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === "email" || formData.email
                    ? "top-0 text-sm text-gray-900"
                    : "top-4 text-base text-gray-500"
                }`}
              >
                Email
              </label>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 flex items-center gap-1"
                >
                  <XCircle size={14} />
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={6}
                className={`w-full px-4 py-4 bg-transparent border-0 border-b-2 ${
                  errors.message ? "border-red-500" : "border-gray-300 focus:border-gray-900"
                } outline-none transition-colors resize-none text-gray-900`}
                placeholder="Enter your message"
                required
                aria-label="Message"
                aria-required="true"
                aria-invalid={!!errors.message}
              />
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === "message" || formData.message
                    ? "top-0 text-sm text-gray-900"
                    : "top-4 text-base text-gray-500"
                }`}
              >
                Message
              </label>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 flex items-center gap-1"
                >
                  <XCircle size={14} />
                  {errors.message}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed mt-8"
              whileHover={!isSubmitting ? { scale: 1.02, backgroundColor: "#1a1a1a" } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
