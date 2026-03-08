import GradientText from "../shared/GradientText"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Icon from "../shared/Icon"
import AvatarGlow from "../shared/AvatarGlow"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import image from '@/assets/image.png'
import { motion } from "motion/react"
import { TypingH3 } from "../shared/TypingH3"


export default function HomeSection() {
    const isMobile = useIsMobile()
    return (
        <section id="home" className="flex my-6 flex-col-reverse lg:flex-row lg:gap-40 gap-6 md:gap-20 justify-center items-center min-h-screen">
            <div className="text-center lg:text-right">
                <h1 className="text-3xl md:text-5xl font-bold">Hi, It's <GradientText>Hai</GradientText></h1>
                <TypingH3/>
                <p className="max-w-lg mt-2 text-slate-300 leading-relaxed text-sm md:text-[16px]">As a programmer, I love solving problems through lines of code. I don't just write code, I build seamless digital experiences.</p>
                <div className="text-primary flex flex-row space-x-3 items-center justify-center lg:justify-end mt-4">
                    <Icon onClick={() => window.open("https://github.com/HaiGH-Space", "_blank")}>
                        <FaGithub size={20} />
                    </Icon>
                    <Icon onClick={() => window.open("https://www.linkedin.com/in/h%E1%BA%A3i-nguy%E1%BB%85n-686908382/", "_blank")}>
                        <FaLinkedin size={20} />
                    </Icon>
                </div>
                <div className="space-x-2 my-6">
                    <a href={`${import.meta.env.BASE_URL}/Hai-Nguyen-CV.pdf`} target="_blank" rel="noopener noreferrer" className={cn(isMobile ? "text-sm px-2 py-1" : "px-4 py-2", "font-bold border-2 rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_25px_0] text-black bg-primary border-none cursor-pointer shadow-[0_0_10px_0] shadow-primary")}>
                        Resume
                    </a>
                    <a href="#contact" className={cn(isMobile ? "text-sm px-2 py-1" : "px-4 py-2", "font-bold border-primary border-2 bg-transparent text-primary rounded-full duration-300 hover:shadow-[0_0_10px_0] hover:text-black hover:bg-primary cursor-pointer shadow-primary")}>
                        Contact
                    </a>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <AvatarGlow src={image} alt="My Avatar" />
            </motion.div>
        </section >
    )
}