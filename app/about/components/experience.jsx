"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ────────────────────────────────────────────────
// DATA: Easy to edit — add/remove entries here only
// Order: most recent first (will be reversed for display if needed)
// ────────────────────────────────────────────────
const experiences = [
  {
    id: 1,
    startDate: "Sep 2023",
    endDate: "Present",
    institution: "University of Florida",
    department: "Department of Physics",
    position: "Research Assistant",
    mentor: "Dr. Heather Ray",
    location: "Gainesville, Florida, USA",
    type: "PhD Research",
    description:
      "Core member of the UF Neutrino Group working on the Short-Baseline Near Detector (SBND) at Fermilab.",
    highlights: [
      "1. Analyzing electron neutrino selection efficiency",
      "2. Performing Bethe-Bloch simulation and energy reconstruction",
      "3. Utilizing SPINE (ML-based particle imaging framework developed by SLAC)",
      "4. Establishing LED calibration system for SBND PMT calibration",
    ],
    skills: ["Machine Learning", "SPINE Framework", "Neutrino Physics", "Python", "Data Analysis", "Simulation"],
  },
  {
    id: 2,
    startDate: "May 2023",
    endDate: "Aug 2023",
    institution: "University of Florida",
    department: "Department of Physics",
    position: "Research Assistant",
    mentor: "Dr. Neil Sullivan",
    location: "Gainesville, Florida, USA",
    type: "Summer Research",
    description:
      "Experimental condensed matter physics project on single-molecule magnets.",
    highlights: [
      "1. Detected magnetoelectric effects in single-molecule magnets",
      "2. Designed and optimized a Tunnel Diode Oscillator (TDO) detector",
      "3. Achieved ultra-high frequency stability (~216 MHz, std dev ~300 Hz) in superfluid helium environment",
    ],
    skills: ["Experimental Physics", "Low-Temperature Techniques", "Instrumentation", "Data Acquisition"],
  },
  {
    id: 3,
    startDate: "Sep 2020",
    endDate: "Sep 2021",
    institution: "Aresty Research Center",
    position: "Undergraduate Research Assistant",
    mentor: "Dr. Larry Zamick",
    location: "Rutgers University, USA",
    type: "Undergraduate Research",
    description: "Theoretical nuclear physics – quantum mechanics with matrices.",
    highlights: [
      "1. Developed new quantum number for symmetric patterns in wavefunctions",
      "2. Studied odd-even staggering in strong coupling regime (11×11 pentadiagonal matrix)",
      "3. Calculated electromagnetic transition rates using symbolic computation",
    ],
    skills: ["Quantum Mechanics", "Nuclear Physics", "Mathematica", "Symbolic Computation"],
  },
  {
    id: 4,
    startDate: "Jun 2020",
    endDate: "Aug 2020",
    institution: "Institute of Physics, Academia Sinica",
    position: "Research Intern",
    mentor: "Dr. Shih-Chang Lee (High Energy Theory Group)",
    location: "Taipei, Taiwan",
    type: "Summer Internship",
    description:
      "1. Literature review and research on high-energy theory and anomalies.",
    highlights: [
      "2. Compiled references on black hole physics, cosmology, and condensed matter theory",
      "3. Investigated the beryllium-8 (⁸Be) anomaly – experimental setups and theoretical interpretations",
    ],
    skills: ["High Energy Theory", "Literature Review", "Scientific Writing"],
  },
  // Add future/new entries here (most recent at top)
];

function Title() {
  return (
    <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start">
        <Hr variant="long" />
        <motion.h1
          className="text-3xl font-bold mt-3"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          Research & Professional Experience
        </motion.h1>
      </div>
    </div>
  );
}

function TimelineCard({ experience, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`flex ps-10 md:ps-0 ${
        isEven ? "md:justify-center md:translate-x-68" : "md:justify-center md:-translate-x-68"
      } justify-center mb-4`}
    >
      <div className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-3 rounded-xl shadow-lg border border-gray-600 min-w-max">
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <div className="text-sm font-bold">{experience.startDate}</div>
            <div className="text-xs text-gray-300">Start</div>
          </div>
          <div className="w-px h-8 bg-gray-500" />
          <div className="text-center">
            <div className="text-sm font-bold">{experience.endDate}</div>
            <div className="text-xs text-gray-300">End</div>
          </div>
          <div className="w-px h-8 bg-gray-500" />
          <div className="text-center">
            <div className="text-sm font-medium text-gray-400">{experience.location}</div>
            <div className="text-xs text-gray-300">Location</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ experience, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative group ${isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"} md:w-1/2`}
    >
      <div className="bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-12 md:ml-0">
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-bold text-xl text-black mb-1">{experience.institution}</h3>
          <h4 className="font-medium text-lg text-gray-700">
            {experience.position}
            <span className="text-sm font-normal text-gray-500 ml-2">• {experience.type}</span>
          </h4>
          {experience.mentor && (
            <p className="text-sm text-gray-600 mt-1">Mentor: {experience.mentor}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-justify leading-relaxed mb-4">{experience.description}</p>

        {/* Highlights (bullets) */}
        {experience.highlights && experience.highlights.length > 0 && (
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1.5">
            {experience.highlights.map((point, idx) => (
              <li key={idx} className="text-sm">{point}</li>
            ))}
          </ul>
        )}

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Wrapper({ children }) {
  return (
    <div className="mx-auto container px-6 py-10">
      <div className="flex justify-center items-center flex-col">{children}</div>
    </div>
  );
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <>
      <Title />
      <Wrapper>
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full" />
          <div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full" />

          <div className="space-y-12 md:space-y-16 relative">
            <AnimatePresence>
              {displayedExperiences.map((experience, index) => (
                <div key={experience.id} className="relative">
                  <TimelineCard experience={experience} index={index} isEven={index % 2 === 1} />

                  <div
                    className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
                      md:left-1/2 md:-translate-x-1/2 md:top-4
                      left-0 -translate-x-1/2 top-5`}
                  />

                  <ExperienceCard experience={experience} index={index} isEven={index % 2 === 1} />
                </div>
              ))}
            </AnimatePresence>
          </div>

          {experiences.length > 3 && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              >
                {showAll ? (
                  <>
                    Show Less
                    <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                ) : (
                  <>
                    View More Experience
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </motion.div>
          )}

          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-300 to-transparent pointer-events-none" />
          )}
        </div>
      </Wrapper>
    </>
  );
}