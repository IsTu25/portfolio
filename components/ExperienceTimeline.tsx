"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Aspiring AI & Mobile Engineer",
        company: "Open for Opportunities",
        period: "Present",
        description: "I’m currently a student focused on learning and building at the intersection of AI model training and mobile application development. Through academic work and personal projects, I’m gaining hands-on experience with machine learning workflows, mobile app development, and system design. I’m actively seeking opportunities—such as internships, collaborative projects, or entry-level roles—where I can apply my skills, learn from real-world challenges, and grow as an engineer while contributing meaningful value.",
        tech: ["Machine Learning", "Mobile Development", "System Design", "Research"]
    }
];

export default function ExperienceTimeline() {
    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Briefcase className="text-[#22c55e]" size={20} />
                        <span className="text-[#22c55e] font-mono text-sm tracking-wider uppercase">Career</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Professional <span className="text-white">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-6 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 pr-4"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-[#22c55e] group-hover:bg-[#22c55e] transition-colors shadow-[0_0_10px_rgba(34,197,94,0.5)]" />

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#22c55e]/30 transition-all duration-300 group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                        <h4 className="text-lg text-[#22c55e] font-medium">{exp.company}</h4>
                                    </div>
                                    <span className="text-sm text-gray-400 font-mono bg-white/5 border border-white/10 px-4 py-2 rounded-full mt-4 md:mt-0 w-fit">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#22c55e]/30 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
