import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale-3 hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={Me1}
									alt="Alvalens"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale-3 hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="relative w-full h-full">
								<Image
									src={Me2}
									alt="Alvalens"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale-3 hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="relative w-full h-full">
								<Image
									src={Me3}
									alt="Alvalens"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,
						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Castaly Fan
					</h2>
					<p className="text-gray-600 text-justify title text-lg leading-relaxed">
						I am currently a{" "}
						<span className="text-black font-medium">
						Physics PhD candidate
						</span>{" "}
						specializing in{" "}
						<span className="text-black font-medium">
						high-energy experimental physics
						</span>
						, with a focus on{" "}
						<span className="text-black font-medium">
						neutrino physics
						</span>{" "}
						and searches for physics beyond the Standard Model.
						<br />
						<br />
						My primary research involves the{" "}
						<span className="text-black font-medium">
						SBND (Short-Baseline Near Detector)
						</span>{" "}
						experiment at Fermilab, where I develop and apply{" "}
						<span className="text-black font-medium">
						machine-learning-based algorithms
						</span>{" "}
						— in particular the{" "}
						<span className="text-black font-medium">
						SPINE (Scalable Particle Imaging with Neural Embeddings)
						</span>{" "}
						framework developed by SLAC — to achieve high-precision 3D reconstruction of particle trajectories in liquid argon time-projection chambers.
						<br />
						<br />
						Beyond my core work in neutrino experiments, I maintain strong interests in{" "}
						<span className="text-black font-medium">
						cosmology
						</span>
						,{" "}
						<span className="text-black font-medium">
						quantum computing
						</span>
						, and other emerging technologies at the interface of fundamental physics and computation.
						<br />
						<br />
						Since childhood, I have aspired to make meaningful contributions to human civilization and the future of our species — and today, each step in this scientific journey feels like steady progress toward realizing that dream.
					</p>
				</motion.div>
			</div>
		</>
	);
}
