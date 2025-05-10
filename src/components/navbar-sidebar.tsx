import React from "react";
import {Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {ScrollArea} from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavItem {
    children: React.ReactNode;
    href: string
}

interface Props {
    items: NavItem[]
    open: boolean;
    onOpenChange: (open: boolean) => void
}

export default function NavbarSidebar({items, open, onOpenChange}: Props) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side={"left"} className={"p-0 transition-none"}>
                <SheetHeader className={"p-4 border-b"}>
                    <div className={"flex items-center"}>
                        <SheetTitle>Menu</SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className={"flex flex-col overflow-y-auto h-full pb-2"}>
                    {items.map((item) => (
                        <Link href={item.href} key={item.href}
                              onClick={() => onOpenChange(false)}
                              className={"w-full text-left p-4 flex items-center text-base font-medium hover:bg-primary hover:text-white"}>
                            {item.children}
                        </Link>
                    ))}
                    <div className={"border-t"}>
                        <Link href={"/sign-in"}
                              className={"w-full text-left p-4 flex items-center text-base font-medium hover:bg-primary hover:text-white"}

                        >
                            Sign In
                        </Link>
                        <Link href={"/sign-up"}
                              className={"w-full text-left p-4 flex items-center text-base font-medium hover:bg-primary hover:text-white"}>

                            Start Selling
                        </Link>
                    </div>
                </ScrollArea>

            </SheetContent>
        </Sheet>
    )
}