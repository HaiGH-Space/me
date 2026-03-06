import { Menu } from "lucide-react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="p-4 w-full flex justify-between items-center backdrop-blur-sm z-50">
            <Logo/>
            <Menu className="w-4 h-4 text-main hidden"/>
            <Navigation/>
            <Button className="cursor-pointer text-nowrap from-10% to-100% bg-linear-270 from-primary to-[#ff1d15]">Contact me</Button>
        </header>
    )
}