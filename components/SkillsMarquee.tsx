"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Code, Database, Globe, Smartphone, Server } from "lucide-react";

const skillCategories = [
    {
        title: "AI & Machine Learning",
        icon: Brain,
        skills: [
            { name: "PyTorch", level: 90 },
            { name: "Transformers", level: 85 },
            { name: "TensorFlow", level: 82 },
            { name: "Neural Networks", level: 88 },
            { name: "Computer Vision", level: 85 },
            { name: "NLP", level: 82 },
        ],
    },
    {
        title: "AI Tools & Frameworks",
        icon: Cpu,
        skills: [
            { name: "LangChain", level: 92 },
            { name: "Hugging Face", level: 88 },
            { name: "OpenAI API", level: 95 },
            { name: "RAG Systems", level: 88 },
            { name: "Vector DBs", level: 85 },
        ],
    },
    {
        title: "Mobile Development",
        icon: Smartphone,
        skills: [
            { name: "React Native", level: 92 },
            { name: "Flutter", level: 88 },
            { name: "Expo", level: 90 },
            { name: "Android Studio", level: 85 },
            { name: "iOS", level: 80 },
        ],
    },
    {
        title: "Full Stack & Web",
        icon: Globe,
        skills: [
            { name: "Next.js", level: 90 },
            { name: "React", level: 92 },
            { name: "TypeScript", level: 88 },
            { name: "Node.js", level: 85 },
            { name: "FastAPI", level: 88 },
        ],
    },
    {
        title: "Data Science",
        icon: Database,
        skills: [
            { name: "Python", level: 95 },
            { name: "Pandas", level: 90 },
            { name: "NumPy", level: 92 },
            { name: "Scikit-learn", level: 85 },
            { name: "Data Viz", level: 82 },
        ],
    },
    {
        title: "Core Programming",
        icon: Code,
        skills: [
            { name: "Python", level: 95 },
            { name: "JavaScript", level: 90 },
            { name: "Java", level: 80 },
            { name: "C++", level: 75 },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-40 left-0 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Server className="text-[#22c55e]" size={20} />
                        <span className="text-[#22c55e] font-mono text-sm tracking-wider uppercase">Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Technical <span className="text-white">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Deep expertise across artificial intelligence, machine learning, and modern application development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#22c55e]/30 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-[#22c55e]/10 text-[#22c55e] group-hover:scale-110 transition-transform">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-[#22c55e] transition-colors">{category.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                                            <span className="text-gray-500 text-xs font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (idx * 0.05) }}
                                                className="h-full bg-gradient-to-r from-[#22c55e] to-[#3b82f6] rounded-full relative"
                                            >
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
