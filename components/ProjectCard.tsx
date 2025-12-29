"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    type: "AI" | "Mobile" | "Hybrid" | "Web";
    delay: number;
    githubUrl?: string;
    liveUrl?: string;
}

export default function ProjectCard({ title, description, tags, type, delay, githubUrl, liveUrl }: ProjectCardProps) {
    const isAI = type === "AI";
    const isHybrid = type === "Hybrid";
    const isWeb = type === "Web";

    let accentColor = "text-[#22c55e]";
    let borderColor = "hover:border-[#22c55e]/50";
    let gradientFrom = "from-green-900/40";
    let placeholderTextColor = "text-green-500";
    let buttonBg = "bg-[#22c55e]";

    if (isAI) {
        accentColor = "text-[#3b82f6]";
        borderColor = "hover:border-[#3b82f6]/50";
        gradientFrom = "from-blue-900/40";
        placeholderTextColor = "text-blue-500";
        buttonBg = "bg-[#3b82f6]";
    } else if (isHybrid) {
        accentColor = "text-purple-400";
        borderColor = "hover:border-purple-500/50";
        gradientFrom = "from-purple-900/40";
        placeholderTextColor = "text-purple-500";
        buttonBg = "bg-purple-500";
    } else if (isWeb) {
        accentColor = "text-cyan-400";
        borderColor = "hover:border-cyan-500/50";
        gradientFrom = "from-cyan-900/40";
        placeholderTextColor = "text-cyan-500";
        buttonBg = "bg-cyan-500";
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.1 }}
            className={`glass-card rounded-xl overflow-hidden group border border-white/5 transition-all duration-300 ${borderColor}`}
        >
            <div className="h-48 bg-gray-800 relative overflow-hidden">
                {/* Placeholder Gradient for Image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} to-black`} />

                {/* Placeholder Icon/Text if no image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-4xl font-bold opacity-20 ${placeholderTextColor}`}>
                        {title.substring(0, 2).toUpperCase()}
                    </span>
                </div>

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    {githubUrl && (
                        <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors text-white">
                            <Github size={18} />
                        </Link>
                    )}
                    {liveUrl && (
                        <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors text-white">
                            <ExternalLink size={18} />
                        </Link>
                    )}
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className={`text-xs font-mono mb-2 block ${accentColor}`}>{type} PROJECT</span>
                        <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">{title}</h3>
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
