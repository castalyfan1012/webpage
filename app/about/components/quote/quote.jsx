// Quote.js
import "./style.css";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "./useIntersectionObserver";

function Wrapper({ children }) {
	return (
		<div className="h-full w-full flex justify-center items-center p-10">
			<motion.div
				className="flex justify-center items-center flex-col mb-5"
				initial={{
					opacity: 0,
					scale: 0.9,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				transition={{
					delay: 0.6,
					duration: 2,
					ease: [0.22, 1, 0.36, 1],
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Quote() {
	const text1 = '"In the vastness of space and the immensity of time,'.split(" ");
	const text2 = 'it is our joy to share a planet and an epoch together."'.split(" ");
	const author = 'Carl Sagan, Cosmos (1980)'.split(" ");
	const [ref, isIntersecting] = useIntersectionObserver();

	return (
		<Wrapper>
			<div ref={ref} className="text-center">
				<h3 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] mb-2 text-white font-[var(--font-playfair)]">
					{text1.map((word, index) => (
						<motion.span
							key={index}
							initial={{
								opacity: 0,
								filter: "blur(4px)",
								scale: 0.92,
							}}
							animate={{
								opacity: isIntersecting ? 1 : 0,
								filter: isIntersecting
									? "blur(0px)"
									: "blur(4px)",
								scale: isIntersecting ? 1 : 0.92,
							}}
							transition={{
								delay: isIntersecting ? index * 0.1 : 0,
								duration: 0.5,
							}}>
							{word}{" "}
						</motion.span>
					))}
				</h3>
					<h3 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] mb-2 text-white font-[var(--font-playfair)]">
					{text2.map((word, index) => (
						<motion.span
							key={index + text1.length}
							initial={{
								opacity: 0,
								filter: "blur(4px)",
								scale: 0.92,
							}}
							animate={{
								opacity: isIntersecting ? 1 : 0,
								filter: isIntersecting
									? "blur(0px)"
									: "blur(4px)",
								scale: isIntersecting ? 1 : 0.92,
							}}
							transition={{
								delay: isIntersecting
									? (text1.length + index) * 0.1
									: 0,
								duration: 0.5,
							}}>
							{word}{" "}
						</motion.span>
					))}
				</h3>
					<p className="text-lg sm:text-xl text-gray-200 italic mt-6 font-[var(--font-playfair)]">
					<motion.span
						initial={{
							opacity: 0,
							filter: "blur(4px)",
							scale: 0.92,
						}}
						animate={{
							opacity: isIntersecting ? 1 : 0,
							filter: isIntersecting
								? "blur(0px)"
								: "blur(4px)",
							scale: isIntersecting ? 1 : 0.92,
						}}
						transition={{
							delay: isIntersecting
								? (text1.length + text2.length) * 0.1
								: 0,
							duration: 0.5,
						}}>
						Adapted from{" "}
					</motion.span>
					{author.map((word, index) => (
						<motion.span
							key={index + text1.length + text2.length}
							initial={{
								opacity: 0,
								filter: "blur(4px)",
								scale: 0.92,
							}}
							animate={{
								opacity: isIntersecting ? 1 : 0,
								filter: isIntersecting
									? "blur(0px)"
									: "blur(4px)",
								scale: isIntersecting ? 1 : 0.92,
							}}
							transition={{
								delay: isIntersecting
									? (text1.length + text2.length + index + 1) * 0.1
									: 0,
								duration: 0.5,
							}}>
							{word}{" "}
						</motion.span>
					))}
				</p>
			</div>
		</Wrapper>
	);
}