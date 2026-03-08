import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaRocket, FaCode, FaAward } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Upwork / Freelance",
      role: "Full-Stack Developer (Freelance)",
      period: "2023 – Present",
      location: "Remote",
      description:
        "Delivering end-to-end web solutions for international clients. Specializing in React, Next.js, Node.js, and modern databases. Consistently rated 5 stars for quality and communication.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "REST APIs",
        "GraphQL",
        "Docker",
      ],
      achievements: [
        {
          icon: <FaStar className="text-yellow-400" />,
          text: "Maintained a 100% job success score with 15+ completed contracts",
        },
        {
          icon: <FaRocket className="text-gray-400" />,
          text: "Reduced page load times by 45% through code splitting and image optimization",
        },
        {
          icon: <FaCode className="text-gray-500" />,
          text: "Built scalable dashboards for real-time analytics using Next.js and WebSockets",
        },
        {
          icon: <FaAward className="text-blue-400" />,
          text: "Earned 'Top Rated' badge on Upwork within first 6 months",
        },
      ],
      upworkUrl: "https://www.upwork.com/freelancers/~0167d450fe17ec558c",
    },
    {
      id: 2,
      company: "Various Clients",
      role: "Frontend Developer (Contract)",
      period: "2022 – 2023",
      location: "Remote",
      description:
        "Developed responsive user interfaces for startups and small businesses. Collaborated with designers to implement pixel-perfect designs and improve user experience.",
      technologies: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind",
        "Figma",
        "Vite",
      ],
      achievements: [
        {
          icon: <FaStar className="text-yellow-400" />,
          text: "Delivered 10+ projects ahead of schedule with zero critical bugs",
        },
        {
          icon: <FaRocket className="text-gray-400" />,
          text: "Implemented SEO best practices, increasing client organic traffic by 60%",
        },
      ],
      upworkUrl: "https://www.upwork.com/freelancers/~0167d450fe17ec558c",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const achievementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <AnimatePresence>
      <motion.section
        id="work"
        className="py-20 px-6 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[var(--primary)]">Freelance </span>
            <span className="text-[var(--text-primary)]">Experience</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Real-world projects delivered for clients around the globe
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "var(--shadow-lg)" }}
              className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 shadow-md transition-all duration-500 group relative"
            >
              <motion.a
                href={exp.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:inline-flex absolute -top-3 -right-3 items-center gap-2 bg-[var(--primary)] text-white font-semibold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all duration-300 z-20"
              >
                <span>Hire Me on Upwork</span>
                <FiExternalLink className="text-sm" />
              </motion.a>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                    <span className="text-lg font-semibold text-[var(--primary)]">
                      {exp.company}
                    </span>
                    <span className="hidden sm:block text-[var(--text-secondary)]">•</span>
                    <span className="text-[var(--text-secondary)]">{exp.location}</span>
                  </div>
                </div>
                <span className="inline-flex items-center px-4 py-2 bg-[var(--surface-highlight)] text-[var(--primary)] rounded-full text-sm font-medium mt-4 lg:mt-0">
                  {exp.period}
                </span>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8"
              >
                {exp.description}
              </motion.p>

              <div className="mb-8">
                <h4 className="text-[var(--text-primary)] font-semibold mb-4 flex items-center gap-2">
                  <FaCode className="text-[var(--text-secondary)]" />
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={badgeVariants}
                      initial="hidden"
                      animate="visible"
                      className="px-4 py-2 bg-[var(--surface-highlight)] text-[var(--text-secondary)] rounded-full text-sm font-medium border border-[var(--border)] hover:border-[var(--primary)]/50 hover:text-[var(--primary)] transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[var(--text-primary)] font-semibold mb-4 flex items-center gap-2">
                  <FaAward className="text-yellow-400" />
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={achievementVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-start gap-3 p-4 bg-[var(--surface-highlight)]/50 rounded-lg hover:bg-[var(--surface-highlight)] transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-1 text-lg">
                        {achievement.icon}
                      </div>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {achievement.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.a
                href={exp.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="lg:hidden mt-6 w-full inline-flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-semibold px-6 py-4 rounded-xl hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all duration-300"
              >
                <span>Hire Me on Upwork</span>
                <FiExternalLink className="text-sm" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default ExperienceSection;