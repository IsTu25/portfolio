"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
    {
        title: "NIRAPOTTA",
        description: "Community-driven safety system with AI-powered 'Digital Gut Feeling' for subconscious risk detection and real-time SOS. Bridges mobile safety with advanced behavioral analysis.",
        tags: ["React Native", "TensorFlow", "Node.js", "MongoDB", "Flask"],
        type: "Hybrid" as const,
        githubUrl: "https://github.com/IsTu25/Mobile-App",
    },
    {
        title: "Event Koi",
        description: "Comprehensive event management platform with ticket booking, social networking, real-time chat, and QR validation. A complete solution for organizers and attendees.",
        tags: ["Next.js", "MySQL", "TypeScript", "TailwindCSS", "Node.js"],
        type: "Web" as const,
        githubUrl: "https://github.com/IsTu25/Event-Koi",
        liveUrl: "https://event-koi.vercel.app/",
    },

];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="text-[#22c55e]" size={20} />
                        <span className="text-[#22c55e] font-mono text-sm tracking-wider uppercase">Innovation</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Selected <span className="text-white">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A showcase of technical innovation and problem-solving. Each project represents a unique challenge and a robust solution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} delay={index} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="https://github.com/IsTu25"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#22c55e]/50 transition-all text-white font-medium group"
                    >
                        <span>View All Projects</span>
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#22c55e] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
