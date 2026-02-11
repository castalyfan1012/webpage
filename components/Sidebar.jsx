"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useFullPage } from "@alvalens/react-fullpage-snap";
import { motion } from "framer-motion";

const navItems = [
	{ icon: faHome, label: "Go to Home section", anchor: "home", index: 0 },
	{ icon: faUser, label: "Go to About section", anchor: "about", index: 2 }, // Skip quote (index 1)
	{ icon: faFolderOpen, label: "Go to Projects section", anchor: "projects", index: 3 },
	{ icon: faEnvelope, label: "Go to Contact section", anchor: "contact", index: 4 },
];

const Sidebar = () => {
	const { moveTo, activeIndex } = useFullPage();

	return (
		<div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
			<ul
				id="sidebar"
				className="flex flex-col justify-evenly items-center h-full text-gray-50">
				{navItems.map((item) => (
					<li key={item.anchor} data-menuanchor={item.anchor}>
						<button
							aria-label={item.label}
							onClick={() => moveTo(item.index)}
							className="relative flex items-center justify-center w-10 h-10">
							{activeIndex === item.index && (
								<motion.div
									layoutId="sidebar-active"
									className="absolute inset-0 bg-gray-500 rounded-xl"
									transition={{
										type: "spring",
										stiffness: 350,
										damping: 30,
									}}
								/>
							)}
							<FontAwesomeIcon
								icon={item.icon}
								className={`relative z-10 text-xl transition-transform duration-300 ${
									activeIndex === item.index
										? "scale-110"
										: "scale-100"
								}`}
							/>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;