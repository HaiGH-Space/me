import GradientText from "../shared/GradientText"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Icon from "../shared/Icon"

export default function HomeSection() {
    return (
        <section id="home" className="flex justify-center items-center min-h-screen p-6">
            <div className="text-right">
                <h1 className="text-5xl">Hi, It's <GradientText>Hai</GradientText></h1>
                <h3 className="text-3xl">I'm a <GradientText>Web Developer</GradientText></h3>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="text-primary flex flex-row space-x-3 items-center justify-end my-4">
                    <Icon><FaGithub size={20} /></Icon>
                    <Icon><FaLinkedin size={20} /></Icon>
                </div>
                <div className="space-x-2">
                    <button className="py-2 border-2 rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_0] text-black bg-primary px-4 border-none cursor-pointer shadow-[0_0_10px_0] shadow-primary">
                        Hire
                    </button>
                    <button className="border-primary border-2 bg-transparent text-primary py-2 rounded-full duration-300 hover:shadow-[0_0_10px_0] hover:text-black hover:bg-primary px-4 cursor-pointer shadow-primary">
                        Contact
                    </button>
                </div>
            </div>
            {/* home image*/}
            <div>
                <img src="/assets/home.png" alt="home image" className="w-96" />
            </div>
        </section >
    )
}