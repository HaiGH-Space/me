import { motion } from "motion/react";
import GradientText from "./GradientText";
import Typewriter from 'typewriter-effect';
import { cn } from "@/lib/utils";

export function TypingH3() {
    return (
        <h3 className={cn(
            "text-xl md:text-3xl mt-2 font-mono flex items-center",
            "justify-center lg:justify-end"
        )}
        >
            <span>I'm a&nbsp;</span>
            <GradientText>
                <Typewriter
                    options={{
                        strings: ['Web Developer', 'Problem Solver'],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                    }}
                />
            </GradientText>
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-0.5 h-[1em] bg-primary ml-1"
            />

        </h3>
    );
}