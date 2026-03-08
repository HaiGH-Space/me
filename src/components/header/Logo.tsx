import GradientText from "../shared/GradientText"
import { motion } from "motion/react";

export default function Logo() {
  const name = "Hai";
  const lastName = "Nguyen";

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.a
      href="#home"
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.05, delayChildren: 0.3 }}
      className="inline-flex text-2xl font-extrabold cursor-pointer hover:scale-105 duration-300 ease-in-out"
    >
      <span className="flex">
        {name.split("").map((char, i) => (
          <motion.span key={i} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </span>
      <span className="inline-block w-2" />
      <GradientText className="flex">
        {lastName.split("").map((char, i) => (
          <motion.span key={i} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </GradientText>
    </motion.a>
  );
}