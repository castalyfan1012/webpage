import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faGraduationCap,
  faTrophy,
  faAward,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
      <motion.div
        className="flex justify-center items-start flex-col mb-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ────────────────────────────────────────────────
// DATA: Easy to edit — add/remove entries here only
// ────────────────────────────────────────────────
const educationEntries = [
  {
    startDate: "2022",
    endDate: "Present",
    institution: "University of Florida",
    degree: "Ph.D. Candidate, Physics",
    gpa: "Accumulative GPA: 3.89",
    description:
      "Focusing on high-energy experimental neutrino physics and beyond Standard Model searches.",
  },
  {
    startDate: "2018",
    endDate: "2022",
    institution: "Rutgers University",
    degree: "B.S., Physics (Minor: Astronomy)",
    gpa: "",
    description: "Graduated with Departmental Honors in Physics (Sep 2021).",
  },
  // Add future/new entries here (most recent at top)
];

const achievementsByYear = {
  2025: [
    {
      icon: faAward,
      title: "URA Visiting Scholar Program Award",
      subtitle: "Universities Research Association",
      date: "Oct 2025",
      color: "from-blue-500 to-purple-600",
      details: [
        "Project: University of Florida SBND ν_e Cross Section Analysis and PDS Calibration Effort.",
        "Granted $4,945 to support research at Fermilab. Upcoming on-site work is planned for Spring 2026.",
      ],
    },
  ],
  2024: [
    {
      icon: faAward,
      title: "URA Visiting Scholar Program Award",
      subtitle: "Universities Research Association",
      date: "Apr 2024",
      color: "from-blue-500 to-purple-600",
      details: [
        "Project: University of Florida SBND PDS and Machine Learning Effort.",
        "Granted $8,000 to support research at Fermilab. LED calibration device for PMT timing calibration at SBND was installed and done with the first test successfully.",
      ],
    },
    {
      icon: faAward,
      title: "IHEPA Fellowship",
      subtitle: "Institute of High Energy Physics and Astrophysics, University of Florida",
      date: "Mar 2024",
      color: "from-blue-500 to-purple-600",
      details: ["Received $15,000+ to facilitate research at Fermilab in Summer 2024."],
    },
  ],
  
  // Add future/new entries here (most recent year at top)
};

// Flatten all achievements into a single array for easier limiting
const allAchievements = Object.entries(achievementsByYear)
  .sort(([a], [b]) => parseInt(b) - parseInt(a))
  .flatMap(([year, achievements]) =>
    achievements.map((achievement) => ({ ...achievement, year }))
  );

export default function Education() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleAchievements = isExpanded ? allAchievements : allAchievements.slice(0, 6);
  const hasMoreAchievements = allAchievements.length > 6;

  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Education & Honors</h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Overview of my academic background and recognitions.
          </p>
        </motion.div>
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section - Left */}
          <motion.div
            className="px-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-semibold text-xl mt-7 mb-3">Education</h2>
            {educationEntries.map((entry, index) => (
              <div key={index} className="mb-6">
                <div className="font-medium text-lg mb-2">
                  {entry.startDate} – {entry.endDate}
                </div>
                <h3 className="font-semibold text-xl">{entry.institution}</h3>
                <h4 className="text-md font-normal mb-3">{entry.degree}</h4>
                {entry.gpa && (
                  <div className="flex flex-wrap gap-2 mb-3 text-sm">
                    <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">{entry.gpa}</div>
                  </div>
                )}
                <p className="text-gray-600 text-justify title text-lg leading-relaxed">{entry.description}</p>
              </div>
            ))}
          </motion.div>{" "}
          {/* Achievements Section - Right */}
          <motion.div
            className="flex flex-col justify-start px-5 md:px-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-semibold text-xl mt-7">Honors & Awards</h2>
            <p className="text-md font-normal mb-3 md:mb-6">
              Key recognitions during my academic career.
            </p>

            {/* Achievements Container with transparent bottom effect */}
            <div className="relative">
              <div className="space-y-4">
                {/* Show visible achievements */}
                <AnimatePresence>
                  {visibleAchievements.map((achievement, index) => (
                    <motion.div
                      key={`${achievement.year}-${index}`}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                      }}
                    >
                      {/* Year indicator for first achievement of each year */}
                      {index === 0 ||
                      visibleAchievements[index - 1]?.year !== achievement.year ? (
                        <div className="flex items-center gap-3 mb-3 mt-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-600">
                              {achievement.year}
                            </span>
                          </div>
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                        </div>
                      ) : null}

                      {/* Glassmorphism achievement card with monochrome to color effect */}
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0">
                        <div className="flex items-center gap-4 mb-2">
                          <div
                            className={`aspect-square w-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-primary-foreground transition-all duration-300`}
                          >
                            <FontAwesomeIcon
                              icon={achievement.icon}
                              className="text-white h-5 w-5"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{achievement.title}</h3>
                            <p className="text-sm">{achievement.subtitle}</p>
                            <div className="text-xs text-gray-500 mt-1">{achievement.date}</div>
                          </div>
                        </div>
                        {/* Details (bullets) */}
                        {achievement.details && achievement.details.length > 0 && (
                          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mt-2">
                            {achievement.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Transparent bottom overlay when not expanded */}
              {!isExpanded && hasMoreAchievements && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-300 via-slate/70 to-transparent pointer-events-none"></div>
              )}

              {/* Expand/Collapse Button */}
              {hasMoreAchievements && (
                <motion.div
                  className="flex justify-center mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
                  >
                    <span>
                      {isExpanded
                        ? `Show Less`
                        : `Show ${allAchievements.length - 6} More`}
                    </span>
                    <FontAwesomeIcon
                      icon={isExpanded ? faChevronUp : faChevronDown}
                      className="h-3 w-3 transition-transform duration-300"
                    />
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
}