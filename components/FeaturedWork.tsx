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

// SVG Pattern Components
const TechPattern = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
    <defs>
      <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
      </linearGradient>
    </defs>
    <circle cx="80" cy="60" r="40" fill="url(#techGrad)" opacity="0.6" />
    <circle cx="320" cy="80" r="50" fill="url(#techGrad)" opacity="0.4" />
    <rect x="150" y="120" width="100" height="100" fill="url(#techGrad)" opacity="0.5" transform="rotate(45 200 170)" />
    <path d="M50 200 L200 50 L350 200" stroke="url(#techGrad)" strokeWidth="3" fill="none" opacity="0.6" />
    <circle cx="200" cy="250" r="30" fill="url(#techGrad)" opacity="0.5" />
  </svg>
);

const CoffeePattern = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
    <defs>
      <linearGradient id="coffeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
      </linearGradient>
    </defs>
    <ellipse cx="200" cy="150" rx="120" ry="80" fill="url(#coffeeGrad)" opacity="0.5" />
    <circle cx="120" cy="100" r="25" fill="url(#coffeeGrad)" opacity="0.6" />
    <circle cx="280" cy="100" r="25" fill="url(#coffeeGrad)" opacity="0.6" />
    <path d="M100 200 Q200 180 300 200" stroke="url(#coffeeGrad)" strokeWidth="4" fill="none" opacity="0.6" />
    <circle cx="200" cy="220" r="15" fill="url(#coffeeGrad)" opacity="0.7" />
  </svg>
);

const NaturePattern = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
    <defs>
      <linearGradient id="natureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
      </linearGradient>
    </defs>
    <path d="M200 250 Q150 200 100 250 Q150 200 200 150 Q250 200 300 250 Q250 200 200 150" 
          fill="url(#natureGrad)" opacity="0.5" />
    <circle cx="150" cy="180" r="30" fill="url(#natureGrad)" opacity="0.4" />
    <circle cx="250" cy="180" r="30" fill="url(#natureGrad)" opacity="0.4" />
    <ellipse cx="200" cy="100" rx="40" ry="60" fill="url(#natureGrad)" opacity="0.5" />
  </svg>
);

const FashionPattern = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
    <defs>
      <linearGradient id="fashionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
      </linearGradient>
    </defs>
    <rect x="100" y="80" width="200" height="140" fill="url(#fashionGrad)" opacity="0.3" rx="10" />
    <circle cx="150" cy="120" r="20" fill="url(#fashionGrad)" opacity="0.5" />
    <circle cx="250" cy="120" r="20" fill="url(#fashionGrad)" opacity="0.5" />
    <path d="M200 150 L200 200" stroke="url(#fashionGrad)" strokeWidth="3" opacity="0.6" />
    <path d="M150 200 L250 200" stroke="url(#fashionGrad)" strokeWidth="3" opacity="0.6" />
  </svg>
);

const HealthPattern = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
    <defs>
      <linearGradient id="healthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="150" r="80" fill="url(#healthGrad)" opacity="0.4" />
    <path d="M200 100 L200 200 M150 150 L250 150" stroke="url(#healthGrad)" strokeWidth="8" 
          strokeLinecap="round" opacity="0.7" />
    <circle cx="120" cy="100" r="25" fill="url(#healthGrad)" opacity="0.5" />
    <circle cx="280" cy="100" r="25" fill="url(#healthGrad)" opacity="0.5" />
    <circle cx="120" cy="200" r="25" fill="url(#healthGrad)" opacity="0.5" />
    <circle cx="280" cy="200" r="25" fill="url(#healthGrad)" opacity="0.5" />
  </svg>
);

const PatternRenderer = ({ pattern }: { pattern: string }) => {
  switch (pattern) {
    case "tech":
      return <TechPattern />;
    case "coffee":
      return <CoffeePattern />;
    case "nature":
      return <NaturePattern />;
    case "fashion":
      return <FashionPattern />;
    case "health":
      return <HealthPattern />;
    default:
      return null;
  }
};

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white w-full overflow-hidden"
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
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <PatternRenderer pattern={project.imagePattern} />
                  </motion.div>

                  {/* Overlay with animated circles */}
                  <motion.div
                    className="absolute inset-0 bg-black/10"
                    whileHover={{ opacity: 0.2 }}
                  />
                  
                  {/* Floating geometric shapes */}
                  <motion.div
                    className="absolute top-8 right-8 w-16 h-16 border-2 border-white/30 rounded-lg"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-16 left-8 w-12 h-12 border-2 border-white/30 rounded-full"
                    animate={{
                      y: [0, 10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />

                  {/* Content Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 drop-shadow-lg">
                      {project.name}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base drop-shadow-md">{project.client}</p>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                  >
                    <ArrowRight className="text-white" size={20} />
                  </motion.div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ width: "50%" }}
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                    {project.deliverables.map((deliverable) => (
                      <motion.span
                        key={deliverable}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {deliverable}
                      </motion.span>
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
