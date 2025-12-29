"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import SkillsMarquee from "@/components/SkillsMarquee";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="min-h-screen relative selection:bg-[#22c55e] selection:text-black"
        >
            <Navbar />
            <Hero />
            <BentoGrid />
            <Projects />
            <SkillsMarquee />
            <ExperienceTimeline />
            <ContactForm />
            <Footer />
        </motion.main>
    );
}
