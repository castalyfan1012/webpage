"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import { Atom, Microscope, Cpu } from "lucide-react";

const skillCategories = {
  theoretical: {
    title: "Theoretical Backgrounds",
    icon: Atom,
    description: "Core concepts in high-energy physics, gravity, and the early universe",
    languages: [
      { name: "High-Energy Physics", highlight: true },
      { name: "Quantum Field Theory (QFT)", highlight: true },
      { name: "General Relativity", highlight: true },
      { name: "Cosmology", highlight: true },
      { name: "Quantum Computing", highlight: true },
    ],
    tools: [
      "Feynman Diagrams",
      "Perturbation Theory",
      "Path Integrals",
      "Symbolic Computation (Mathematica-style)",
    ],
  },
  experimental: {
    title: "Experimental & Computational Expertise",
    icon: Microscope,
    description: "Data analysis, simulation, and ML-driven reconstruction in worldwide experiments",
    languages: [
      { name: "Machine Learning / Deep Learning", highlight: true },
      { name: "Data Analysis & Statistics", highlight: true },
      { name: "3D Event Reconstruction", highlight: true },
      { name: "Signal Processing", highlight: true },
      { name: "Quantum Computing (Qiskit)", highlight: true },
      { name: "PMT & Photon Detection", highlight: true },
      { name: "Basic Electronics & Instrumentation", highlight: true },
    ],
    tools: [
      "ROOT / CERN libraries",
      "SPINE (ML-based imaging)",
      "TensorFlow / PyTorch",
      "Jupyter / Google Colab",
      "Monte Carlo Simulations",
      "Digitize & Image Processing",
      "PMT R&D & Calibration",
      "IBM Qiskit",
    ],
  },
  tools: {
    title: "Programming & Productivity Tools",
    icon: Cpu,
    description: "Development environment, documentation, and scientific communication",
    languages: [
      { name: "Python", highlight: true },
      { name: "C", highlight: true },
      { name: "C++", highlight: true },
      { name: "LaTeX (scientific typesetting)", highlight: true },
      { name: "HTML & CSS", highlight: true },
    ],
    tools: [
      "Git / GitHub",
      "VS Code / Jupyter",
      "Microsoft Office / Excel (data organization)",
      "Overleaf",
      "Docker (reproducible environments)",
    ],
  },
};

function SkillCard({ skill, isSelected, onClick }) {
  const Icon = skill.icon;

  return (
    <motion.div
      onClick={onClick}
      className={`relative cursor-pointer group p-6 rounded-2xl border transition-all duration-300 ${
        isSelected
          ? "bg-white/20 border-black border-2 shadow-lg"
          : "bg-white/10 border-gray-300/20 hover:bg-white/20 hover:border-gray-300/30"
      }`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isSelected && (
        <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-xl" />
      )}

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div
          className={`p-4 rounded-xl transition-all duration-300 ${
            isSelected ? "bg-white/30" : "bg-white/10 group-hover:bg-white/20"
          }`}
        >
          <Icon className="w-8 h-8 text-black" />
        </div>
        <div>
          <h3 className="font-semibold text-black text-lg mb-2">{skill.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

function SkillDetails({ selectedSkill }) {
  if (!selectedSkill) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-12 space-y-8"
    >
      <motion.div
        className="bg-white/40 border border-gray-300/30 rounded-2xl p-8 shadow-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-black mb-6 text-center">
          Core Competencies
        </h3>
        <motion.div
          key={selectedSkill.title}
          className="flex flex-wrap justify-center gap-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
        >
          {selectedSkill.languages.map((skill) => (
            <motion.span
              key={skill.name}
              variants={tagVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default flex items-center gap-2
                ${
                  skill.highlight
                    ? "bg-black text-white shadow-md border-black scale-105 z-10 hover:shadow-lg"
                    : "bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 text-black hover:bg-white/60"
                }`}
            >
              {skill.highlight && (
                <span className="text-yellow-400 text-[10px] animate-pulse">✦</span>
              )}
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-white/20 border border-gray-300/20 rounded-2xl p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-medium text-gray-500 mb-6 text-center uppercase tracking-wider">
          Supporting Tools &amp; Software
        </h3>
        <motion.div
          key={selectedSkill.title + "-tools"}
          className="flex flex-wrap justify-center gap-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
        >
          {selectedSkill.tools.map((tool) => (
            <motion.span
              key={tool}
              variants={tagVariants}
              className="px-4 py-1.5 bg-gray-300/30 border border-gray-400/20 rounded-lg text-gray-600 text-xs font-medium"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function CredlyBadge() {
  useEffect(() => {
    // Load the Credly embed script once
    if (!document.querySelector('script[src*="credly.com"]')) {
      const script = document.createElement("script");
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already loaded, trigger re-initialization if available
      if (window.credlyEmbed) {
        window.credlyEmbed.init();
      }
    }
  }, []);

  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Section header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black mb-2">Certifications</h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto">
          Verified credentials and professional certifications.
        </p>
      </div>

      {/* Badge card */}
      <div className="flex justify-center">
        <motion.div
          className="bg-white/40 border border-gray-300/30 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 max-w-2xl w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Credly embedded badge */}
          <div className="flex-shrink-0 flex justify-center">
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="47f472f7-2513-4ef5-b80c-e42fe654cbb5"
              data-share-badge-host="https://www.credly.com"
            />
          </div>

          {/* Badge description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              IBM Verified
            </span>
            <h3 className="text-xl font-semibold text-black">
              Quantum Computing Fundamentals
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Awarded for demonstrating foundational knowledge in quantum computing,
              including quantum circuits, gates, and algorithms using IBM Qiskit.
            </p>
            <a
              href="https://www.credly.com/badges/47f472f7-2513-4ef5-b80c-e42fe654cbb5/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
            >
              View Badge
              <span className="text-xs">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("experimental");

  return (
    <div className="relative">
      <div className="mx-auto container px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            Research Skills &amp; Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Core competencies in theoretical physics, experimental methods, and computational tools supporting high-energy and neutrino research.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(skillCategories).map(([key, skill], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard
                skill={skill}
                isSelected={selectedCategory === key}
                onClick={() => setSelectedCategory(key)}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <SkillDetails selectedSkill={skillCategories[selectedCategory]} />
        </AnimatePresence>

        {/* Certifications */}
        <CredlyBadge />
      </div>
    </div>
  );
}