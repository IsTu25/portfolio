"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, MessageSquare, ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("isfakiqbalchowdhury@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-20 left-0 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-[#22c55e] font-mono text-sm tracking-wider uppercase mb-2 block">What's Next?</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Start a <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22c55e] to-[#3b82f6]">Collaboration</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                        I'm always open to discussing product design work or partnership opportunities. Let's build something extraordinary.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Unique Email Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 rounded-3xl p-8 relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[#22c55e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="p-4 rounded-2xl bg-[#22c55e]/10 text-[#22c55e]">
                                    <Mail size={32} />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm font-medium mb-1">Drop me an email</h3>
                                    <p className="text-2xl md:text-3xl font-bold text-white break-all md:break-normal">isfakiqbalchowdhury@gmail.com</p>
                                </div>
                            </div>
                            <button
                                onClick={copyEmail}
                                className="p-4 rounded-full border border-white/10 hover:bg-white/5 hover:border-[#22c55e]/50 transition-all text-gray-400 hover:text-white"
                                title="Copy Email"
                            >
                                {copied ? <span className="text-[#22c55e] font-bold text-sm">Copied!</span> : <Copy size={24} />}
                            </button>
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-start gap-4 hover:border-[#3b82f6]/30 transition-colors group"
                    >
                        <div className="p-3 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] group-hover:scale-110 transition-transform">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <h3 className="text-gray-400 text-sm font-medium">Based in</h3>
                            <p className="text-xl font-bold text-white">Dhaka, Bangladesh</p>
                            <span className="text-xs text-[#22c55e] bg-[#22c55e]/10 px-2 py-1 rounded mt-2 inline-block">Remote Available</span>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Social Actions grid - unified style */}
                    {[
                        { title: "GitHub", icon: Github, href: "https://github.com/IsTu25", color: "hover:border-white/20", bg: "hover:bg-white/5" },
                        { title: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/isfak-iqbal-chowdhuruy-839956320/", color: "hover:border-[#0077b5]/50", bg: "hover:bg-[#0077b5]/10" },
                        { title: "Twitter/X", icon: MessageSquare, href: "#", color: "hover:border-white/20", bg: "hover:bg-white/5" },
                    ].map((item, i) => (
                        <Link key={i} href={item.href} target="_blank" className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className={`h-full bg-[#111] border border-white/5 rounded-3xl p-6 flex items-center justify-between transition-all duration-300 ${item.color} ${item.bg}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-gray-300 group-hover:text-white transition-colors">
                                        <item.icon size={24} />
                                    </div>
                                    <span className="text-lg font-medium text-gray-300 group-hover:text-white">{item.title}</span>
                                </div>
                                <ArrowUpRight className="text-gray-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
