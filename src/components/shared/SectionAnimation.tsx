import { motion, type Variants } from "motion/react";

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

export default function SectionAnimation({ children, isScrolled = false }: { children: React.ReactNode, isScrolled?: boolean }) {
    return isScrolled ? (
        <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }
        }>
            {children}
        </motion.div >
    ) : (
        <motion.div variants={itemVariants} initial="hidden" animate="show">

            {children}
        </motion.div>)
}