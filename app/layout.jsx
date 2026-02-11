import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://www.castalyfan.com"), // ← update domain if changed
	title: {
	  default: "Castaly Fan | Homepage",
	  template: "%s | Castaly Fan", // for child pages: e.g. "About | Castaly Fan"
	},
	description:
	  "Castaly Fan – Physics PhD candidate at University of Florida specializing in high-energy experimental neutrino physics (SBND at Fermilab), machine learning reconstruction, and beyond-Standard-Model searches. Research interests include cosmology, quantum computing, and photon detection systems.",
	keywords: [
	  "Castaly Fan",
	  "Chin-Ching Fan",
	  "neutrino physics",
	  "SBND",
	  "Fermilab",
	  "high energy physics",
	  "machine learning physics",
	  "SPINE",
	  "quantum computing",
	  "physics phd",
	  "university of florida physics",
	],
	authors: [{ name: "Castaly Fan", url: "https://www.castalyfan.com" }],
	openGraph: {
	  type: "website",
	  url: "https://www.castalyfan.com",
	  title: "Castaly Fan | Homepage",
	  siteName: "Castaly Fan",
	  description:
		"PhD research in experimental neutrino physics (SBND), machine learning for particle imaging (SPINE), LED/PMT calibration, and interests in cosmology & quantum computing.",
	  images: [
		{
		  url: "/og-image-castaly.jpg", // ← prepare a nice portrait or research-themed image
		  alt: "Castaly Fan – Physics Researcher",
		  width: 1200,
		  height: 630,
		},
	  ],
	},
	twitter: {
	  card: "summary_large_image",
	  title: "Castaly Fan | Homepage",
	  description: "Neutrino physics, machine learning, SBND @ Fermilab",
	  images: ["/og-image-castaly.jpg"],
	},
  };

  const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Castaly Fan",
	alternateName: "Chin-Ching Fan",
	url: "https://www.castalyfan.com",
	jobTitle: "Physics PhD Candidate",
	worksFor: {
	  "@type": "CollegeOrUniversity",
	  name: "University of Florida",
	  department: "Department of Physics",
	},
	alumniOf: {
	  "@type": "CollegeOrUniversity",
	  name: "Rutgers University",
	},
	email: "castalyf@fnal.gov",
	sameAs: [
	  "https://github.com/castalyfan1012",
	  "https://www.linkedin.com/in/castaly-fan-571379a8/",
	  "https://www.castalyfan.com",
	  "https://orcid.org/0000-0001-7148-0732"
	],
  };

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
