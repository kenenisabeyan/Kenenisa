import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectSection/ProjectCard";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const freelanceProjects = [
  {
    title: "E-commerce Dashboard for Retail Client",
    description:
      "Built a real-time analytics dashboard for a retail chain to monitor sales, inventory, and customer behavior. Integrated with existing ERP via REST APIs.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=E-commerce+Dashboard",
    link: "https://client-dashboard.example.com",
    github: "#",
    tech: [
      { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    ],
    category: "Freelance",
  },
  {
    title: "Portfolio Site for Photographer",
    description:
      "Designed and developed a fast, SEO-optimized portfolio for a professional photographer. Includes custom CMS for easy image uploads.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=Photographer+Portfolio",
    link: "https://photographer-portfolio.example.com",
    github: "#",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
      { icon: <SiFirebase className="text-amber-500" />, name: "Firebase" },
    ],
    category: "Freelance",
  },
];

const FreelanceProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "100px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      className="relative py-28 overflow-hidden bg-[var(--background)]"
      id="freelance"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--primary)] rounded-full filter blur-3xl opacity-5 -z-10 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl opacity-5 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[var(--primary)]">Freelance </span>
            <span className="text-[var(--text-primary)]">Projects</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Selected client work that delivered real business value
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {freelanceProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FreelanceProjects;