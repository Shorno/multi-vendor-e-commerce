"use client"
import Link from "next/link";
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import NavbarSidebar from "@/components/navbar-sidebar";
import {MenuIcon} from "lucide-react";


interface NavItemProps {
    children: React.ReactNode;
    isActive?: boolean,
    href: string
}

const NavItem = ({children, isActive, href}: NavItemProps) => {
    return (
        <Button asChild variant={isActive ? "default" : "outline"}
                className={cn("rounded-full px-3.5 text-lg")}
        >
            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
}
const navItems = [
    {href: "/", children: "Home"},
    {href: "/about", children: "About"},
    {href: "/features", children: "Features"},
    {href: "/pricing", children: "Pricing"},
    {href: "/contact", children: "Contact"},
]

export default function Navbar() {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <nav className={"h-20 flex border-b justify-between font-medium bg-white"}>
            <Link href={"/"} className={"pl-6 flex items-center"}>
                <span className={"text-5xl font-medium"}>NextCom</span>
            </Link>
            <NavbarSidebar items={navItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>

            <div className={"items-center gap-4 hidden lg:flex"}>
                {navItems.map((item) => (
                    <NavItem
                        key={item.href}
                        href={item.href}
                        isActive={pathname === item.href}
                    >
                        {item.children}
                    </NavItem>
                ))}
            </div>
            <div className={"hidden lg:flex"}>
                <Button variant={"secondary"}
                        asChild
                        className={"border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-secondary transition-colors text-lg"}
                >
                    <Link href={"/login"}>
                        Login
                    </Link>
                </Button>
                <Button variant={"secondary"}
                        asChild
                        className={"border-l border-t-0  border-r-0 px-12 h-full rounded-none bg-black hover:text-black text-white hover:bg-secondary transition-colors text-lg"}
                >
                    <Link href={"/start-selling"}>
                        Start Selling
                    </Link>
                </Button>
            </div>
            <div className={"flex lg:hidden items-center justify-center"}>
                <Button asChild variant={"ghost"} className={"size-12 border-transparent bg-white"}
                        onClick={() => setIsSidebarOpen(true)}>
                    <MenuIcon/>
                </Button>
            </div>
        </nav>
    )
}