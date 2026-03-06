export default function GradientText({children}: { children: React.ReactNode }) {
    return (
        <span className="text-transparent bg-clip-text bg-linear-270 from-10% to-100% from-primary to-[#ff1d15]">
            {children}
        </span>
    )
}