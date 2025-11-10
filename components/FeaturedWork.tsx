"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "TechFlow Solutions",
    client: "Enterprise SaaS",
    deliverables: ["Brand Identity", "Web Design", "Brand Strategy"],
    description:
      "Complete rebrand for a leading SaaS platform, resulting in 40% increase in brand recognition.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Artisan Coffee Co.",
    client: "Retail & Hospitality",
    deliverables: ["Visual Identity", "Packaging Design", "Brand Experience"],
    description:
      "Crafting a premium brand identity that elevated a local coffee chain to national recognition.",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "GreenSpace Initiative",
    client: "Non-Profit Organization",
    deliverables: ["Brand Strategy", "Visual Identity", "Campaign Design"],
    description:
      "Developing a compelling brand narrative that increased donor engagement by 60%.",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Luxe Fashion House",
    client: "Luxury Retail",
    deliverables: ["Brand Identity", "Digital Experience", "Content Strategy"],
    description:
      "Creating an aspirational brand identity that resonated with high-end fashion consumers.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "HealthFirst Medical",
    client: "Healthcare",
    deliverables: ["Brand Strategy", "Visual Identity", "Web Design"],
    description:
      "Rebranding a healthcare provider with a modern, trustworthy, and approachable identity.",
    color: "from-teal-500 to-blue-500",
  },
];

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-24 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our most impactful brand transformations
          </p>
        </motion.div>

        <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="flex-shrink-0 w-full md:w-96"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{ y }}
            >
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg h-full"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`h-64 bg-gradient-to-br ${project.color} relative`}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-3xl font-bold text-white mb-1">
                      {project.name}
                    </h3>
                    <p className="text-white/90">{project.client}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-gray-900 font-semibold group"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study
                    <ExternalLink
                      size={16}
                      className="group-hover:rotate-45 transition-transform"
                    />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

