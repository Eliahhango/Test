"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "TechFlow Solutions",
    client: "Enterprise SaaS",
    deliverables: ["Brand Identity", "Web Design", "Brand Strategy"],
    description:
      "Complete rebrand for a leading SaaS platform, resulting in 40% increase in brand recognition and user engagement.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Artisan Coffee Co.",
    client: "Retail & Hospitality",
    deliverables: ["Visual Identity", "Packaging Design", "Brand Experience"],
    description:
      "Crafting a premium brand identity that elevated a local coffee chain to national recognition and market expansion.",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "GreenSpace Initiative",
    client: "Non-Profit Organization",
    deliverables: ["Brand Strategy", "Visual Identity", "Campaign Design"],
    description:
      "Developing a compelling brand narrative that increased donor engagement by 60% and community awareness.",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Luxe Fashion House",
    client: "Luxury Retail",
    deliverables: ["Brand Identity", "Digital Experience", "Content Strategy"],
    description:
      "Creating an aspirational brand identity that resonated with high-end fashion consumers and increased sales.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "HealthFirst Medical",
    client: "Healthcare",
    deliverables: ["Brand Strategy", "Visual Identity", "Web Design"],
    description:
      "Rebranding a healthcare provider with a modern, trustworthy, and approachable identity that builds patient trust.",
    color: "from-teal-500 to-blue-500",
  },
];

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white w-full overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-center">
            Featured Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center">
            Showcasing our most impactful brand transformations and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col hover:shadow-2xl transition-shadow duration-300 group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`h-48 sm:h-64 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 bg-black/10"
                    whileHover={{ opacity: 0.2 }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {project.name}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">{project.client}</p>
                  </div>
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                  >
                    <ArrowRight className="text-white" size={20} />
                  </motion.div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                    {project.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed text-center sm:text-left flex-1">
                    {project.description}
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center justify-center sm:justify-start gap-2 text-gray-900 font-semibold group/link mx-auto sm:mx-0"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study
                    <ExternalLink
                      size={16}
                      className="group-hover/link:rotate-45 transition-transform"
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
