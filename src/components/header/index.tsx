import { Menu } from "lucide-react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import Navigation from "./Navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, type Variants } from "motion/react";

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
    return (
        <motion.header
            variants={headerVariants}
            initial="hidden"
            animate="show" className="fixed h-16 top-0 left-0 w-full flex justify-between items-center backdrop-blur-sm z-50">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
                <Logo />
                {isMobile ? <Menu className="w-6 h-6 text-primary" /> :
                    <>
                        <Navigation />
                        <Button className="cursor-pointer text-nowrap from-10% to-100% bg-linear-270 from-primary to-[#ff1d15]">Contact me</Button>
                    </>
                }
            </div>

        </motion.header>
    )
}