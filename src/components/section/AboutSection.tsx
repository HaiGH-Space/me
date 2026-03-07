import { useIsMobile } from "@/hooks/use-mobile";
import AvatarGlow from "../shared/AvatarGlow";
import GradientText from "../shared/GradientText";
import { cn } from "@/lib/utils";

export default function AboutSection() {
    const isMobile = useIsMobile()
    return (
        <section id="about" className="lg:flex-row lg:gap-40 gap-6 md:gap-15 min-h-screen flex flex-col items-center justify-center">
            <AvatarGlow src="src/assets/image.png" alt="My Avatar" />
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
                <h2 className="text-3xl md:text-5xl">
                    About <GradientText>Me</GradientText>
                </h2>
                <p className="text-sm md:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex flex-row space-x-2">
                    <a href="#" className={cn(isMobile ? "text-sm px-2 py-1" : "px-4 py-2 ", "my-2 font-bold cursor-pointer shadow-[0_0_10px_0] shadow-primary text-black bg-primary rounded-full")}>
                        Read More
                    </a>
                </div>
            </div>
        </section>
    )
}