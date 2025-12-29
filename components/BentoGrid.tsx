"use client";

import { motion } from "framer-motion";
import { Target, Zap, Handshake, Code2 } from "lucide-react";

export default function BentoGrid() {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Code2 className="text-[#22c55e]" size={20} />
                        <span className="text-[#22c55e] font-mono text-sm tracking-wider uppercase">Philosophy</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Beyond the <span className="text-white">Code</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        My approach to building intelligent systems and scalable solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Mission Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#22c55e]/30 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] mb-6 group-hover:scale-110 transition-transform">
                            <Target size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">My Mission</h3>
                        <p className="text-gray-400 leading-relaxed">
                            My mission is to build intelligent, reliable software that connects advanced AI capabilities with real-world mobile experiences. I focus on creating systems that are not only technically strong but also practical, scalable, and easy to use. I believe great engineering happens where performance, clarity, and thoughtful design come together.
                        </p>
                    </motion.div>

                    {/* Current Focus */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#3b82f6]/30 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] mb-6 group-hover:scale-110 transition-transform">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">What I'm Working On</h3>
                        <p className="text-gray-400 leading-relaxed">
                            I’m currently focused on training and integrating AI models while developing high-performance mobile applications. My work involves experimenting with machine learning workflows, optimizing model performance, and bringing AI-driven features into mobile products. Alongside this, I continue refining full-stack and system design skills to build end-to-end solutions.
                        </p>
                    </motion.div>

                    {/* Client Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                            <Handshake size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">How I Can Help</h3>
                        <p className="text-gray-400 leading-relaxed">
                            I help clients and teams turn ideas into intelligent, production-ready applications. This includes designing AI-powered features, developing scalable mobile apps, and building clean backend systems that support real-world usage. Whether it’s prototyping an AI concept or delivering a polished mobile product, I focus on solutions that are efficient, maintainable, and built for growth.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
