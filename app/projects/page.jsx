"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// images
import ProjectAll from "@/public/image/projects.png";

import Hr from "@/components/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faOrcid, faResearchgate, faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faAtom } from "@fortawesome/free-solid-svg-icons";

const category = {
	1: "Web Development",
	2: "AI & Machine Learning",
	9: "Other",
};

export default function Page() {
	const [activeCategory, setActiveCategory] = useState(1);
	const projects = Projects.Projects.filter((item) => item.show === true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/#projects">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ duration: 1, ease: "circOut" }}
							className="relative bg-slate-300 rounded-sm h-[400px] md:h-[300px] w-[50vw] md:w-[30vw] grayscale-3 hover:grayscale-0 ">
							<Image
								src={ProjectAll}
								alt="Alvalens"
								fill
								placeholder="blur"
								className="object-cover"
								sizes="(max-width: 768px) 80vw, 30vw"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							My Projects
						</h1>
						<Hr />
						<p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							List of my projects that I have done and{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								currently working on.
							</span>
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary" style={{ padding: '1.2rem 2.8rem', fontSize: '1.65rem' }}>Scroll Down</Button>
						</motion.div>
					</div>
				</div>

				{/* Publications Section */}
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<Hr variant="long"></Hr>
						<h1 className="text-3xl font-bold mt-3">Publications</h1>
					</div>
				</div>

				<div className="w-screen mx-auto container gap-8 px-10 mb-16">
					{/* Main Academic Profiles - Google Scholar & INSPIRE-HEP */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, type: "spring" }}
						className="flex flex-col items-center mb-12">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mb-8">
							{/* Google Scholar */}
							<div className="flex flex-col items-center">
								<a href="https://scholar.google.com/citations?user=OVLnx_sAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group mb-6">
									<div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-full group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 mb-4 shadow-lg">
										<FontAwesomeIcon icon={faGraduationCap} className="text-7xl text-blue-600" />
									</div>
									<span className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-center mb-2">Google Scholar</span>
								</a>
								<a href="https://scholar.google.com/citations?user=OVLnx_sAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
									<Button variation="primary" style={{ padding: '1.2rem 2.8rem', fontSize: '1.65rem' }}>
										Enter
									</Button>
								</a>
							</div>

							{/* INSPIRE-HEP */}
							<div className="flex flex-col items-center">
								<a href="https://inspirehep.net/authors/1848396" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group mb-6">
									<div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-full group-hover:from-purple-100 group-hover:to-purple-200 transition-all duration-300 mb-4 shadow-lg">
										<FontAwesomeIcon icon={faAtom} className="text-7xl text-purple-600" />
									</div>
									<span className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors text-center mb-2">INSPIRE-HEP</span>
								</a>
								<a href="https://inspirehep.net/authors/1848396" target="_blank" rel="noopener noreferrer">
									<Button variation="primary" style={{ padding: '1.2rem 2.8rem', fontSize: '1.65rem' }}>
										Enter
									</Button>
								</a>
							</div>
						</div>
					</motion.div>

					{/* Additional Academic Profile Links */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, type: "spring" }}
						className="flex flex-col items-center">
						<h3 className="text-xl font-semibold mb-6 text-gray-700">Other Academic Profiles</h3>
						<div className="flex flex-wrap justify-center gap-8">
							{/* ORCID */}
							<a href="https://orcid.org/0000-0001-7148-0732" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
								<div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-green-100 transition-all duration-300 mb-3 shadow-md">
									<FontAwesomeIcon icon={faOrcid} className="text-6xl text-green-600" />
								</div>
								<span className="text-base font-medium text-gray-700 group-hover:text-green-600 transition-colors text-center">ORCID</span>
							</a>

							{/* ResearchGate */}
							<a href="https://www.researchgate.net/profile/Castaly-Fan" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
								<div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-cyan-100 transition-all duration-300 mb-3 shadow-md">
									<FontAwesomeIcon icon={faResearchgate} className="text-6xl text-cyan-600" />
								</div>
								<span className="text-base font-medium text-gray-700 group-hover:text-cyan-600 transition-colors text-center">ResearchGate</span>
							</a>

							{/* Wikipedia */}
							<a href="https://en.wikipedia.org/wiki/User:Castaly_Fan" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
								<div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-gray-300 transition-all duration-300 mb-3 shadow-md">
									<FontAwesomeIcon icon={faWikipediaW} className="text-6xl text-gray-700" />
								</div>
								<span className="text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors text-center">Wikipedia</span>
							</a>
						</div>
					</motion.div>
				</div>

				{/* Highlight Projects Section */}
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start">
						<Hr variant="long"></Hr>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{ opacity: 0, x: -200 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.7, type: "spring" }}>
							Highlight Projects
						</motion.h1>
					</div>
				</div>

				{/* SBND Project with Embed */}
				<div className="w-screen mx-auto container gap-4 px-10 mb-10">
					<div className="relative w-full mx-auto container gap-4 grid grid-cols-1 md:grid-cols-2">
						{/* Left side - Embedded website */}
						<motion.div
							className="flex justify-center items-start"
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, type: "spring" }}>
							<div className="relative w-full h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
								<iframe
									src="https://sbn-nd.fnal.gov/"
									className="w-full h-full"
									title="SBND Website"
								/>
							</div>
						</motion.div>

						{/* Right side - Description */}
						<motion.div
							className="flex justify-center items-center flex-col p-8"
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, type: "spring" }}>
							<h2 className="text-3xl font-bold tracking-wider mb-4 text-gray-800">
								SBND at Fermilab
							</h2>
							<p className="text-gray-600 text-center text-lg mb-6">
								The Short-Baseline Near Detector (SBND) is a neutrino experiment at Fermi National Accelerator Laboratory, 
								designed to investigate neutrino oscillations and search for physics beyond the Standard Model.
							</p>
							<a href="https://sbn-nd.fnal.gov/" target="_blank" rel="noopener noreferrer">
								<Button variation="primary" style={{ padding: '1.2rem 2.8rem', fontSize: '1.65rem' }}>
									Visit SBND
								</Button>
							</a>
						</motion.div>
					</div>
				</div>
			</main>
		</>
	);
}