"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-xs font-mono">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
                        </span>
                        Available for Work
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Architecting <span className="text-[#3b82f6]">Intelligent Systems</span> & <span className="text-[#22c55e]">Mobile Experiences</span>.
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-lg">
                        Senior Full-Stack Engineer bridging the gap between advanced AI research and high-performance mobile applications.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 pt-2">
                        <a href="https://github.com/IsTu25" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-[#22c55e]/20 hover:bg-[#22c55e]/10 hover:border-[#22c55e] transition-all text-[#22c55e]">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/isfak-iqbal-chowdhuruy-839956320/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-[#22c55e]/20 hover:bg-[#22c55e]/10 hover:border-[#22c55e] transition-all text-[#22c55e]">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:isfakiqbalchowdhury@gmail.com" className="p-3 rounded-xl border border-[#22c55e]/20 hover:bg-[#22c55e]/10 hover:border-[#22c55e] transition-all text-[#22c55e]">
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link href="#projects" className="px-6 py-3 rounded-lg bg-[#22c55e] text-black font-semibold hover:bg-[#16a34a] transition-colors flex items-center gap-2">
                            View My Work <ArrowRight size={18} />
                        </Link>
                        <Link href="#contact" className="px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-all text-white font-medium flex items-center gap-2">
                            Contact Me <Mail size={18} />
                        </Link>
                    </div>
                </motion.div>

                {/* Right Content - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Glowing Border rings */}
                        <div className="absolute inset-0 rounded-full border-2 border-[#22c55e]/30 animate-pulse" />
                        <div className="absolute -inset-4 rounded-full border border-[#3b82f6]/20" />

                        {/* Image Placeholder */}
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-black overflow-hidden border border-gray-700 relative z-10">
                            <Image
                                src="/profile-pic.jpg"
                                alt="Profile Picture"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
