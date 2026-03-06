
import type { AnchorHTMLAttributes, ReactNode } from "react";

export default function Navigation() {
  return (
    <nav className="text-2xl space-x-16 font-medium">
      <NavItem href="#home">Home</NavItem>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </nav>
  )
}

interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

function NavItem({ children, className, ...props }: NavItemProps) {
  return (
    <a
      {...props}
      className={`after:bottom-0 after:left-0 after:absolute after:bg-primary hover:text-primary relative after:h-0.5 after:w-0 hover:after:w-full after:duration-300 transition-all ${className || ''}`}
    >
      {children}
    </a>
  );
}