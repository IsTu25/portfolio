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
    title: "Isfak Iqbal Chowdhury | AI & Mobile Engineer",
    description: "Isfak Iqbal Chowdhury's portfolio. Aspiring AI & Mobile Engineer building intelligent systems and high-performance applications. View projects like NIRAPOTTA and Event Koi.",
    keywords: ["AI Engineer", "Mobile Developer", "React Native", "Next.js", "Portfolio", "Bangladesh", "Isfak Iqbal Chowdhury"],
    openGraph: {
        title: "Isfak Iqbal Chowdhury | AI & Mobile Engineer",
        description: "Aspiring AI & Mobile Engineer building intelligent systems and high-performance applications.",
        url: "https://isfakiqbalchowdhury.dev",
        siteName: "Isfak Iqbal Chowdhury Portfolio",
        images: [
            {
                url: "/profile-pic.jpg",
                width: 800,
                height: 800,
            },
        ],
        locale: "en_US",
        type: "website",
    },
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
