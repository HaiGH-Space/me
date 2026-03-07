import { useIsMobile } from "@/hooks/use-mobile";
import AvatarGlow from "../shared/AvatarGlow";
import GradientText from "../shared/GradientText";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import image from '@/assets/image.png'
export default function AboutSection() {
    const isMobile = useIsMobile()
    return (
        <section id="about" className="lg:flex-row lg:gap-40 gap-6 md:gap-15 min-h-screen flex flex-col items-center justify-center">
            <AvatarGlow src={image} alt="My Avatar" />
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
                <h2 className="text-3xl md:text-5xl">
                    About <GradientText>Me</GradientText>
                </h2>
                <p className="text-sm md:text-[16px] text-slate-300 max-w-lg mt-4 mb-6 leading-relaxed">
                    I'm a passionate Fullstack Web Developer who loves crafting complete, scalable digital experiences. I bridge the gap between pixel-perfect frontend designs and robust backend architectures to build applications that look great and perform even better.
                </p>
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            className={cn(
                                isMobile ? "text-sm px-4 py-2" : "px-6 py-2.5",
                                "font-bold cursor-pointer transition-all duration-300",
                                "bg-primary text-black rounded-full hover:scale-105 active:scale-95",
                                "shadow-[0_0_10px_0] hover:shadow-[0_0_25px_0] shadow-primary"
                            )}
                        >
                            Read More
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-175 bg-card border-zinc-800 text-card-foreground outline-none">
                        <DialogHeader className="select-none text-left">
                            <DialogTitle className="text-3xl font-bold mb-2">
                                More About My <span className="text-primary">Journey</span>
                            </DialogTitle>
                            <DialogDescription className="text-muted-foreground text-base">
                                A quick look at my skills and what I bring to the table.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="select-none space-y-6 mt-2 text-left text-sm md:text-base">
                            <p className="leading-relaxed text-zinc-300">
                                With a strong foundation in both frontend and backend development, I enjoy taking a product from concept to deployment. I thrive in environments where I can solve complex logical problems while ensuring a seamless user experience.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-5 rounded-xl bg-zinc-900/50 border border-primary/30 hover:border-primary transition-colors group">
                                    <h3 className="font-bold text-primary mb-2 text-lg flex items-center gap-2">
                                        <span className="group-hover:animate-bounce">🎨</span> Frontend
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">React, Next.js, Tailwind CSS, TypeScript, Redux</p>
                                </div>
                                <div className="p-5 rounded-xl bg-zinc-900/50 border border-primary/30 hover:border-primary transition-colors group">
                                    <h3 className="font-bold text-primary mb-2 text-lg flex items-center gap-2">
                                        <span className="group-hover:animate-bounce">⚙️</span> Backend
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">Node.js, Express, PostgreSQL, MongoDB, RESTful APIs</p>
                                </div>
                            </div>
                            <div className="pt-4 flex justify-end">
                                <a
                                    href="./Hai-Nguyen-CV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-black transition-all duration-300 hover:shadow-[0_0_10px_0] shadow-primary"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}