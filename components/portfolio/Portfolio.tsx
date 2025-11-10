"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "TechFlow Solutions",
    client: "Enterprise SaaS",
    deliverables: ["Brand Identity", "Web Design", "Brand Strategy"],
    description:
      "Complete rebrand for a leading SaaS platform, resulting in 40% increase in brand recognition and user engagement.",
    color: "from-blue-500 to-cyan-500",
    imagePattern: "tech",
  },
  {
    name: "Artisan Coffee Co.",
    client: "Retail & Hospitality",
    deliverables: ["Visual Identity", "Packaging Design", "Brand Experience"],
    description:
      "Crafting a premium brand identity that elevated a local coffee chain to national recognition and market expansion.",
    color: "from-amber-500 to-orange-500",
    imagePattern: "coffee",
  },
  {
    name: "GreenSpace Initiative",
    client: "Non-Profit Organization",
    deliverables: ["Brand Strategy", "Visual Identity", "Campaign Design"],
    description:
      "Developing a compelling brand narrative that increased donor engagement by 60% and community awareness.",
    color: "from-green-500 to-emerald-500",
    imagePattern: "nature",
  },
  {
    name: "Luxe Fashion House",
    client: "Luxury Retail",
    deliverables: ["Brand Identity", "Digital Experience", "Content Strategy"],
    description:
      "Creating an aspirational brand identity that resonated with high-end fashion consumers and increased sales.",
    color: "from-purple-500 to-pink-500",
    imagePattern: "fashion",
  },
  {
    name: "HealthFirst Medical",
    client: "Healthcare",
    deliverables: ["Brand Strategy", "Visual Identity", "Web Design"],
    description:
      "Rebranding a healthcare provider with a modern, trustworthy, and approachable identity that builds patient trust.",
    color: "from-teal-500 to-blue-500",
    imagePattern: "health",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white w-full overflow-hidden"
    >
      <div className="content">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-4">
            Featured Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center">
            Showcasing our most impactful brand transformations and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

