"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FullPageWrapper, Section, useFullPage } from "@alvalens/react-fullpage-snap";

// components
import Button from "@/components/Button";
import Me from "@/public/image/profile00.webp";
import MeAbout from "@/public/image/me2.jpg";
import Setup from "@/public/image/setup.jpg";
import ProjectAll from "@/public/image/projects.png";
import BkgImage from "@/public/image/bkg.png";
import Hr from "@/components/Hr";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Quote from "../about/components/quote/quote.jsx";

function ScrollIndicator() {
  const { activeIndex } = useFullPage();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (activeIndex !== 0) setDismissed(true);
  }, [activeIndex]);

  return (
    <AnimatePresence>
      {activeIndex === 0 && !dismissed && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <span className="text-[10px] uppercase tracking-[4px] text-gray-500 font-medium">
            Scroll
          </span>
          <motion.div
            className="w-[1.5px] h-14 bg-gray-500 origin-top"
            animate={{
              scaleY: [0, 1, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const MyPage = () => {
  const { activeIndex } = useFullPage();

  // Disable full-page snapping on mobile for smooth scrolling
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <FullPageWrapper enabled={!isMobile}>
      {/* HERO SECTION */}
      <Section>
        <div className="mx-auto w-[82%] max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden">
          {/* MOBILE IMAGE — CIRCLE + SMALLER */}
          <motion.div
            className="block md:hidden col-span-1 mx-auto my-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-full h-48 w-48 mx-auto overflow-hidden grayscale-3 hover:grayscale-0 transition-all ease duration-300">
              <Image
                src={Me}
                width={400}
                height={400}
                alt="Castaly Fan"
                placeholder="blur"
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 50vw"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* TEXT BLOCK */}
          <motion.div
            className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            <motion.h3
              className="uppercase text-xs sm:text-sm md:text-xl mb-3 font-normal tracking-[.5rem] text-gray-500"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              Bridging Fundamental Science and Technology
            </motion.h3>

            <motion.h1
              className="text-black text-4xl md:text-6xl lg:text-6xl 2xl:text-8xl font-bold my-2 md:my-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              Castaly Fan
            </motion.h1>

            <motion.p
              className="title text-md 2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              Welcome to my homepage! I&apos;m a PhD candidate in high&#8209;energy physics, focusing on neutrino research using machine learning and data&#8209;driven methods. Explore the sections below to learn more about my work and interests.
            </motion.p>

            <motion.div
              className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Button
                variation="primary"
                className="px-10 py-5 text-2xl sm:text-3xl md:text-[1.65rem] md:px-[2.8rem] md:py-[1.2rem]"
              >
                <Link
                  href="/docs/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* DESKTOP IMAGE */}
          <motion.div
            className="hidden md:flex col-span-1 mx-auto justify-center items-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <div className="rounded-full h-auto w-auto max-w-[26vw] lg:px-12 grayscale-3 hover:grayscale-0 transition-all ease duration-300 overflow-hidden">
              <Image
                src={Me}
                width={400}
                height={550}
                placeholder="blur"
                alt="Castaly Fan"
                className="rounded-full w-full h-full object-cover"
                sizes="(max-width: 768px) 70vw, 30vw"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* QUOTE SECTION */}
      <Section>
        <div className="relative h-screen w-screen flex justify-center items-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 5, scale: 1.05 }}
            animate={{
              opacity: activeIndex === 1 ? 1 : 0,
              scale: activeIndex === 1 ? 1 : 1.05,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={BkgImage}
              fill
              className="object-cover"
              alt="Background"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          </motion.div>

          <motion.div
            className="relative z-10 w-full"
            initial={{ opacity: 5, y: 20 }}
            animate={{
              opacity: activeIndex === 1 ? 1 : 0,
              y: activeIndex === 1 ? 0 : 20,
            }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Quote />
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50 z-20 pointer-events-none" />
        </div>
      </Section>

      {/* ABOUT SECTION */}
      <Section>
        <div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
          <div className="z-0 mb-15 md:mb-0 md:absolute md:top-1/2 md:right-[10%] md:-translate-y-1/2">
            <motion.div
              className="
                relative bg-slate-300 rounded-sm 
                aspect-[3/2] w-[90vw]
                md:h-[60vh] md:w-[40vw] md:aspect-auto
                grayscale-3 hover:grayscale-0
              "
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
            >
              <Image
                src={MeAbout}
                fill
                sizes="(max-width: 800px) 90vw, 50vw"
                className="object-cover"
                alt="Castaly Fan"
                placeholder="blur"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="
            z-10 w-full 
            relative md:absolute md:w-auto md:left-[10%] 
            top-[60%] md:top-1/3 
            flex flex-col justify-center items-start text-start 
            px-10 py-10 md:py-5
          ">
            <motion.h1
              className="bg-white lg:bg-transparent bg-opacity-50 px-3 text-black text-5xl md:text-8xl font-bold"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring" }}
            >
              About Me
            </motion.h1>
            <Hr />
            <motion.p
              className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              A brief introduction my journey in physics.
            </motion.p>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Button
                variation="primary"
                className="px-10 py-5 text-2xl sm:text-3xl md:text-[1.65rem] md:px-[2.8rem] md:py-[1.2rem]"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section>
        <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
          <div className="z-0 mb-15 md:mb-0 md:absolute md:top-1/2 md:right-[10%] md:-translate-y-1/2">
            <motion.div
              className="
                relative bg-slate-300 rounded-sm 
                aspect-[3/2] w-[80vw]
                md:h-[50vh] md:w-[35vw] md:aspect-auto
                grayscale-3 hover:grayscale-0
              "
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
            >
              <Image
                src={ProjectAll}
                fill
                sizes="(max-width: 768px) 80vw, 50vw"
                className="object-cover"
                alt="Projects"
                placeholder="blur"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="
            z-10 w-full 
            relative md:absolute md:w-auto md:left-[10%] 
            top-[60%] md:top-1/3 
            flex flex-col justify-center items-start text-start 
            px-10 py-10 md:py-5
          ">
            <motion.h1
              className="bg-white lg:bg-transparent bg-opacity-50 px-3 text-black text-5xl md:text-8xl font-bold"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring" }}
            >
              My Projects
            </motion.h1>
            <Hr />
            <motion.p
              className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              Selected works that I&apos;ve built over the years{" "}
              <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
                and currently working on.
              </span>
            </motion.p>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Button
                variation="primary"
                className="px-10 py-5 text-2xl sm:text-3xl md:text-[1.65rem] md:px-[2.8rem] md:py-[1.2rem]"
              >
                <Link href="/projects">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section>
        <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
          <div className="z-0 mb-15 md:mb-0 md:absolute md:top-1/2 md:right-[10%] md:-translate-y-1/2">
            <motion.div
              className="
                relative bg-slate-300 rounded-sm 
                aspect-[3/2] w-[80vw]
                md:h-[50vh] md:w-[35vw] md:aspect-auto
                grayscale-3 hover:grayscale-0
              "
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
            >
              <Image
                src={Setup}
                fill
                sizes="(max-width: 768px) 80vw, 50vw"
                className="object-cover"
                alt="Setup"
                placeholder="blur"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="
            z-10 w-full 
            relative md:absolute md:w-auto md:left-[10%] 
            top-[60%] md:top-1/3
            flex flex-col justify-center items-start text-start 
            px-10 py-10 md:py-5 overflow-hidden
          ">
            <motion.h1
              className="bg-white lg:bg-transparent bg-opacity-50 px-3 text-black text-5xl md:text-8xl font-bold mb-3"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring" }}
            >
              Get In Touch
            </motion.h1>
            <Hr />
            <motion.p
              className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              Feel free to contact me if you have any{" "}
              <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
                questions or just want to say hi.
              </span>
            </motion.p>

            <motion.p
              className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <a href="mailto:castaly.fan@gmail.com?subject=Hello&body=Hello Castaly,">
                castaly.fan@gmail.com
              </a>
            </motion.p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center items-center space-x-4">
              <motion.a
                href="mailto:castaly.fan@gmail.com?subject=Hello&body=Hello Castaly,"
                aria-label="Send email"
                className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  y: { delay: 0.1 },
                  opacity: { delay: 0.2 },
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
              </motion.a>

              <motion.a
                href="https://github.com/castalyfan1012"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  y: { delay: 0.2 },
                  opacity: { delay: 0.3 },
                }}
              >
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/castaly-fan-571379a8/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  y: { delay: 0.4 },
                  opacity: { delay: 0.5 },
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </motion.a>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <motion.footer
        className="fixed bottom-0 left-0 right-0 z-30 py-3 px-8 flex justify-center items-center bg-white/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-xs text-black-400 tracking-widest text-center">
        &copy; All right reserved. Powered by {" "}
          <a
            href="https://github.com/castalyfan1012/webpage/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-gray-400 transition-colors duration-200"
          >
            github.com/castalyfan1012
          </a>
        </p>
      </motion.footer>

      <ScrollIndicator />
    </FullPageWrapper>
  );
};

export default MyPage;