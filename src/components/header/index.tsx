import { Menu } from "lucide-react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import Navigation from "./Navigation";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
    const isMobile = useIsMobile()
    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center backdrop-blur-sm z-50 py-4 px-6">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
                <Logo />
                {isMobile ? <Menu className="w-6 h-6 text-primary" /> :
                    <>
                        <Navigation />
                        <Button className="cursor-pointer text-nowrap from-10% to-100% bg-linear-270 from-primary to-[#ff1d15]">Contact me</Button>
                    </>
                }
            </div>

        </header>
    )
}