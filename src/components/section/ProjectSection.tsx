import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import GradientText from "../shared/GradientText";

type Project = {
    title: string;
    period: string;
    role: string;
    description: string;
    stack: string[];
    highlights: string[];
    sourceCodeUrl: string;
    demoUrl?: string;
    status: "Completed" | "In Progress";
};

const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        period: "Mar 2025 - May 2025",
        role: "Contributor",
        description:
            "Built a complete e-commerce system with secure APIs, scalable frontend architecture, and payment integration.",
        stack: ["Spring Boot", "JWT", "PayPal", "Next.js", "Zustand", "i18n", "Shadcn UI", "MySQL"],
        highlights: [
            "Implemented secure RESTful APIs with authentication and pagination using Spring Boot.",
            "Integrated PayPal payment flow and optimized reliability for transaction handling.",
            "Developed performant frontend modules in Next.js with Zustand state management and i18n.",
            "Designed and maintained relational data models in MySQL.",
        ],
        sourceCodeUrl: "https://github.com/E-Commerce-O/Main-Project",
        status: "Completed",
    },
];

export default function ProjectSection() {
    const isMobile = useIsMobile();
    const stackPreviewCount = isMobile ? 4 : 5;

    return (
        <section
            id="projects"
            className=" min-h-screen flex flex-col items-center justify-center gap-8 md:gap-12 py-8"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-5xl">
                    Featured <GradientText>Projects</GradientText>
                </h2>
                <p className="text-sm md:text-[16px] text-slate-300 max-w-2xl mt-4 leading-relaxed">
                    A showcase of project work focused on performance, clean architecture, and
                    reliable user experiences.
                </p>
            </motion.div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 items-stretch">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                        className="group h-full min-h-85 rounded-2xl border border-zinc-800 bg-card/80 p-6 ring-1 ring-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:ring-primary/25 flex flex-col"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-zinc-100">{project.title}</h3>
                                <p className="text-xs md:text-sm text-zinc-400 mt-1">{project.period} • {project.role}</p>
                            </div>
                            <Badge
                                variant={project.status === "Completed" ? "default" : "outline"}
                                className={project.status === "Completed" ? "text-black" : "text-primary border-primary/60"}
                            >
                                {project.status}
                            </Badge>
                        </div>

                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-3 min-h-18">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.stack.slice(0, stackPreviewCount).map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs md:text-sm px-2.5 py-1 rounded-full border border-primary/35 text-primary bg-primary/10"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.stack.length > stackPreviewCount && (
                                <span className="text-xs md:text-sm px-2.5 py-1 rounded-full border border-zinc-700 text-zinc-400 bg-zinc-900/50">
                                    +{project.stack.length - stackPreviewCount} more
                                </span>
                            )}
                        </div>

                        <div className="mt-auto pt-6 flex items-center justify-between gap-3">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button
                                        type="button"
                                        className="inline-flex w-fit items-center gap-2 text-sm font-bold px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer"
                                    >
                                        View Details <ArrowUpRight size={16} />
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-xs sm:max-w-sm md:max-w-2xl bg-card p-0 border-zinc-800 outline-none border">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                        className="max-h-[90vh] p-6 overflow-y-auto"
                                    >
                                        <DialogHeader className="text-left">
                                            <DialogTitle className="text-2xl md:text-3xl font-bold">
                                                {project.title}
                                            </DialogTitle>
                                            <DialogDescription className="text-sm md:text-base text-muted-foreground">
                                                {project.period} • {project.role}
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className="space-y-5 mt-4 text-left">
                                            <div className="flex items-center gap-3">
                                                <Badge
                                                    variant={project.status === "Completed" ? "default" : "outline"}
                                                    className={project.status === "Completed" ? "text-black" : "text-primary border-primary/60"}
                                                >
                                                    {project.status}
                                                </Badge>
                                            </div>

                                            <p className="text-zinc-300 leading-relaxed">{project.description}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {project.stack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-xs md:text-sm px-2.5 py-1 rounded-full border border-primary/35 text-primary bg-primary/10"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <ul className="space-y-2 text-sm text-zinc-300">
                                                {project.highlights.map((highlight) => (
                                                    <li key={highlight} className="leading-relaxed">
                                                        • {highlight}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="pt-2 flex items-center gap-3">
                                                {project.demoUrl && (
                                                    <a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-primary text-black hover:shadow-[0_0_18px_0] shadow-primary transition-all duration-300"
                                                    >
                                                        Live Demo <ArrowUpRight size={16} />
                                                    </a>
                                                )}
                                                <a
                                                    href={project.sourceCodeUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
                                                >
                                                    Code <FaGithub size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
