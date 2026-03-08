export default function GradientText({children, className}: { children: React.ReactNode, className?: string }) {
    return (
        <span className={`text-transparent bg-clip-text bg-linear-270 from-10% to-100% from-primary to-[#ff1d15] ${className}`}>
            {children}
        </span>
    )
}