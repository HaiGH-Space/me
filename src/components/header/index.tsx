import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatePresence, motion, type Variants } from "motion/react";

const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2
        }
    }
};

export default function Header() {
    const isMobile = useIsMobile()
    const [isOpen, setIsOpen] = useState(false)

    const mobileLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ]

    return (
        <motion.header
            variants={headerVariants}
            initial="hidden"
            animate="show"
            className="fixed h-16 top-0 left-0 w-full flex justify-between items-center z-50 bg-background/95 border-b border-zinc-800/80"
        >
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
                <Logo />
                {isMobile ? (
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        className="text-primary p-2 rounded-md hover:bg-zinc-800/80 hover:text-primary transition-all duration-300"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                ) : (
                    <>
                        <Navigation />
                        <a
                            href="#contact"
                            className="rounded-full py-1 px-2 cursor-pointer text-nowrap from-10% to-100% bg-linear-270 from-primary to-[#ff1d15]"
                        >
                            Make an Offer
                        </a>
                    </>
                )}
            </div>

            <AnimatePresence>
                {isMobile && isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-16 left-0 w-full border-b border-zinc-800 bg-background shadow-[0_14px_30px_-18px_rgba(0,0,0,0.85)]"
                    >
                        <nav className="container mx-auto px-4 md:px-6 py-4 flex flex-col gap-2">
                            {mobileLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-3 py-2 rounded-lg text-base font-semibold text-zinc-200 hover:text-black hover:bg-primary transition-all duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 text-center rounded-full py-2 px-3 font-bold text-black from-10% to-100% bg-linear-270 from-primary to-[#ff1d15]"
                            >
                                Make an Offer
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}