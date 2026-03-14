export default function Icon({children, onClick}: {children: React.ReactNode; onClick?: () => void}) {
    return (
        <div onClick={onClick} className="text-primary hover:shadow-[0_0_10px_0] hover:shadow-primary cursor-pointer hover:-translate-y-1 hover:text-foreground hover:scale-125 hover:bg-primary ease-in-out duration-300 p-2 rounded-full bg-transparent border-2 border-primary">
            {children}
        </div>
    )
}