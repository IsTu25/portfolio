export default function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-white/5 text-center text-gray-500 text-sm">
            <div className="container mx-auto px-6">
                <p>© {new Date().getFullYear()} Isfak. All rights reserved.</p>
                <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion.</p>
            </div>
        </footer>
    );
}
