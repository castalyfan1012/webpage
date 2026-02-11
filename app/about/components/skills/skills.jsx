"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Replace these with better physics-oriented icons (lucide-react, heroicons, etc.)
import { Atom, Microscope, Cpu } from "lucide-react"; // ← recommended replacements

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
          Supporting Tools & Software
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
            Research Skills & Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Core competencies in theoretical physics, experimental methods, and computational tools supporting high-energy and neutrino research.
          </p>
        </motion.div>

        {/* Skill Categories Grid – now 3 columns on large screens */}
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
      </div>
    </div>
  );
}