import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ["latin"],
    variable: "--font-space-mono"
});

export const metadata: Metadata = {
    title: "Isfak | AI & Mobile Engineer",
    description: "Portfolio of a Senior Full-Stack Engineer specializing in AI & Mobile Development.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.variable} ${spaceMono.variable} antialiased bg-[#0a0a0a] text-white selection:bg-[#22c55e] selection:text-black`}>
                {children}
            </body>
        </html>
    );
}
