import Header from "./components/header";
import { ThemeProvider } from "@/components/theme-provider"
import HomeSection from "./components/section/HomeSection";
import AboutSection from "./components/section/AboutSection";
import ContactSection from "./components/section/ContactSection";
import { motion, type Variants } from "motion/react"
import SectionAnimation from "./components/shared/SectionAnimation";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
}


export function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Header />
            <motion.main variants={containerVariants} initial="hidden" animate="show" className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionAnimation>
                    <HomeSection />
                </SectionAnimation>
                <SectionAnimation isScrolled={true}>
                    <AboutSection />
                </SectionAnimation>
                <SectionAnimation isScrolled={true}>
                    <ContactSection />
                </SectionAnimation>
            </motion.main>
        </ThemeProvider>
    )
}

export default App;