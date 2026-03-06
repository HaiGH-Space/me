import GradientText from "../shared/GradientText"

export default function Logo() {
    return (
        <a href="#home" className="hover:scale-105 duration-300 ease-in-out text-4xl font-extrabold cursor-pointer">
            Hai <GradientText>Nguyen</GradientText>
        </a>
    )
}